/**
 * 寄生组合式继承
 */
function inherit(subClass,superClass){
    var prototype = Object.create(superClass.prototype);//创建父类原型副本，不是通过调用构造函数实现。
    subClass.prototype = prototype;
    Object.defineProperty(subClass.prototype,"constructor",{
        enumerable:false,
        value:subClass
    })
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

console.log(PersonSuper.prototype.constructor === PersonSuper);
console.log(Student.prototype.constructor === Student);

/**
 * 测试属性name、age
 * 寄生组合式继承不会两次调用父类构造函数，不会创建两份属性
 */
console.log("name" in Student.prototype);//false
console.log("age" in Student.prototype);//false