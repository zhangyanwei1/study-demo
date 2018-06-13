/**
 * 语法糖：
 * 命名类方法公约；
 * 存在从其他类所继承的类；
 * 在子类中可以访问父类或者超类。
 */
var kclass = function(Parent, props) {
    var Child, F, i;
    //构造函数
    Child = function() {
        //字构造函数存在访问超类的属性并且超类原型有属性“_constructor”
        if(Child.uber && Child.uber.hasOwnProperty("_constructor")) {  
            Child.uber._constructor.apply(this, arguments);
        }

        if(Child.prototype.hasOwnProperty("_constructor")) {
            Child.prototype._constructor.apply(this, arguments);
        }
    }

    //继承
    Parent = Parent || Object;
    F = function() {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.uber = Parent.prototype;
    Child.prototype.constructor = Child;

    //添加实现方法
    for(i in props) {
        if(props.hasOwnProperty(i)) {
            Child.prototype[i] = props[i];
        }
    }

    //返回该class
    return Child;
}

var Man = kclass(null, {
    _constructor: function(what) {
        console.log("Man's constructor");
        this.name = what;
    },
    getName: function() {
        return this.name;
    }
})