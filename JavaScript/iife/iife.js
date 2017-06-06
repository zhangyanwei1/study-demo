/**
 * 私有变量：函数的参数、局部变量和在函数内部定义的其他函数
 * 特权方法：有权访问私有变量和私有函数的公有方法
 * 构造函数创建特权方法；
 * 缺点：构造函数模式的缺点是针对每个实例都会创建同样一组新方法
 */
function MyObject(){

    //私有变量和私有函数
    var privateVa = 10;
    function privateFunction(){
        return false;
    }

    //特权方法
    function publicMethod(){
        privateVa++;
        return privateFunction();
    }
}

//利用私有和特权成员，可以隐藏那些不应该被直接修改的数据
function Person(name){

    this.getName = function(){
        return name;
    }

    this.setName = function(value){
        name = value;
    }
}

//每一个实例都有自己的getName和setName方法
var oerson = new Person("zhang");
console.log(person.getName());

person.setName("yang");
console.log(person.getName());

/**
 * 静态私有变量
 */
(function(){

    //私有变量和私有函数
    var privateVa = 10;

    function privateFunction(){
        return false;
    }

    //构造函数
    MyObject = function(){};

    //共有特权方法
    MyObject.prototype.publicMethod = function(){
        privateVa++;
        return privateFunction();
    }
})();

(function(){

    //name是静态的，由所有实例共享
    var name = "";

    Person = function(value){
        name = value;
    };

    Person.prototype.getName = function(){
        return name;
    };
    Person.prototype.setName = function (value){
        name = value;
    };
})();
var person1 = new Person("Nicholas");
console.log(person1.getName()); //"Nicholas"
person1.setName("Greg");
console.log(person1.getName()); //"Greg"
var person2 = new Person("Michael");
console.log(person1.getName()); //"Michael"
console.log(person2.getName()); //"Michael"

/**
 * 模块模式
 * JavaScript 是以对象字面量的方式来创建单例对象的
 * 通过为单例添加私有变量和特权方法 增强
 */
var singleton = function(){

    //私有变量
    var privateVa = 10;
     
    function privateFunction(){
        return false;
    }

    ////特权/公有方法和属性，暴露调用方法
    return {
        publicProperty: true,

        publicMethod: function(){
            privateVa++;
            console.log(privateVa);
            return privateFunction();
        }
    }
}();