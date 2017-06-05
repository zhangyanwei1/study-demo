console.log('inherit');
/** 
 * 实现原型的继承，组合继承：使用原型链实现原型属性和方法的继承，使用构造函数实现对实例属性的继承
 * 子类原型指向父类实例，也就是指向了父类原型。
 */
function inherit(subClass,superClass){
    /**
     * 第一次调用父类：为子类原型添加属性
     * new：1.创建一个新对象；2.将构造函数作用域赋给新对象，this就指向新对象；3.执行构造函数代码
     * 子类原型属性：name，age
     */
    subClass.prototype = new superClass;
    Object.defineProperty(subClass.prototype,"constructor",{
        enumerable:false,
        value:subClass
    });
}
//父类
function PersonSuper(name,age){
    this.name = name;
    this.age = age;
}
PersonSuper.prototype.sayName = function(){
    console.log(this.name);
}

//子类
function Student(stuNum){
    //继承父类的属性
    /**
     * 第二次调用父类：new Student()子类实例化时
     * 子类实例重写原型上的属性，name，age。
     */
    PersonSuper.call(this,"zhang",22);
    this.stuNum = stuNum;
}
//继承
//SomeSub.prototype = new PersonSuper();
inherit(Student,PersonSuper);

var zhang = new Student('123213');
zhang.sayName();

/**
 * 原型链继承：子类原型重写后不改写constructor属性时
 * 子类原型constructor属性也指向父类的构造函数，这是因为子类原型被重写为父类实例，父类实例的constructor属性是指向构造函数的
 */
console.log(Student.prototype.constructor === PersonSuper);

//测试子类原型属性name、age
console.log("name" in Student.prototype);
console.log("age" in Student.prototype);