//想要继承的对象
var parent = {
    name: 'Pa'
};

//新对象
var child = object(parent);

//object实现
function object(o) {
    var F = function() {};
    F.prototype = o;
    return new F();
}

//使用构造函数创建父对象
function Person() {
    this.name = 'zhang';
}
//添加方法到原型
Person.prototype.getName = function() {
    return this.name;
}
//创建实例
var papa = new Person();

//继承
var kid = object(papa);
//测试自身属性以及原型继承
kid.getName(); //zhang

//换一种方式仅继承原型方法
var kid2 = object(Person.prototype);