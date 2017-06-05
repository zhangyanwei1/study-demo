function Person(name,age){
    this.name = name;
    this.age = age;
    /*Person.prototype.sayName = function(){
        console.log(this.name);
    }*/
}

//重写原型
Person.prototype = {
    constructor:Person,//这种方式，会令constructor属性的枚举属性变为true
    sayName:function(){
        console.log(this.name);
    }
}
Object.keys(Person.prototype);//["sayName","constructor"]

//兼容方式重写constructor属性
Object.defineProperty(Person.prototype,"constructor",{
    enumerable:false,
    value:Person
})
Object.keys(Person.prototype);//["sayName"]

var person1 = new Person("zhang",22);
console.log(person1.constructor === Person);//测试实例的constructor（构造函数属性）属性 与Person关系
console.log(Person.prototype.constructor === Person);//测试构造函数的原型上的constructor属性与构造函数关系

//实例有一个[[prototype]]属性指向原型，通过下面的方式访问
console.log(Person.prototype.isPrototypeOf(person1));
console.log(Object.getPrototypeOf(person1) === Person.prototype);

/**
 * 实例化后重写原型的影响：
 * 实例与原型的指向还是原来的
 * 重写后的原型是一个新的对象，与原有实例已经没有关系了。
 * 
 * 实例化前重写原型只要将原型的构造函数属性constructor属性指向回去就好。
 */
 person1.sayName();//如果原有原型中没有这个方法就会报错