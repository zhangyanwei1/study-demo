//父构造函数
function Article() {
    this.tags = ['js', 'css'];
}
var article = new Article();

/**
 * 模式1：默认模式实现继承
 */

 //blog 文章对象继承了article对象
 function BlogPost() {}
 BlogPost.prototype = article;
 var blog = new BlogPost();

 /**
  * 模式2：借用构造函数继承
  */
function StaticPage() {
    Article.call(this);
}
var page = new StaticPage();

article.hasOwnProperty('tags'); //true
blog.hasOwnProperty('tags');  //false
page.hasOwnProperty('tags');  //true

/**
 * 默认模式通过原型链可以访问父构造函数实例的属性
 * page对象本身则具有一个tags属性，他在使用构造函数的时候，新对象会获得父对象中tags成员的副本（不是引用）
 */

/**
 * 原型链
 */

//父构造函数
function Parent(name) {
    this.name = name || 'zhang';
}

//向原型添加功能
Parent.prototype.say = function () {
    return this.name;
};

//子构造函数
function Child(name) {
    Parent.apply(this, arguments);
}

var kid = new Child('children');

typeof kid.say; //undefined

/**
 * new Child对象和Parent对象之间没有连接了，使用这个模式，kid获取自己的name属性，但是并没有继承Parent的say方法。
 */

 //借用构造函数实现多重继承
 /**
  * 借用构造函数缺点：问题在于无法从原型中继承任何方法，并且原型也仅能添加可重用方法以及属性的位置，它并不会为每个实例重新创建原型。
  * 优点：可以获得父对象上自身成员的真是副本，并且也不会存在子对象意外覆盖父对象的风险。
  */
function Cat() {
    this.legs = 4;
    this.say = function() {
        return "meaowww";
    }
}

function Bird() {
    this.wings = 2;
    this.fly = true;
}

function CatWings() {
    Cat.apply(this);
    Bird.apply(this);
}

var jane = new CatWings();

/**
 * 类式继承模式#3：借用和设置原型
 * 结合前两种模式，先借用构造函数，然后设置子构造函数的原型使其指向一个构造函数创造的新实例
 * 缺点：父构造函数被调用了两次，因此导致其效率低下。最后，自身的属性会被继承两次。
 */
function Parent(name) {
    this.name = name || 'zhang';
}
Parent.prototype.say = function() {
    return this.name;
}
function Child(name) {
    Parent.apply(this, arguments);
}
Child.prototype = new Parent();
//测试
var kid = new Child('weiwei');
kid.name; //weiwei
kid.say(); //weiwei
delete kid.name;
kid.say();//zhang  当我们删除kid本身的name属性后，之后输出了parent上的name属性

/**
 * 类式继承模式4：共享原型
 * 本模式的经验法则：可复用成员应该转移到原型中而不是放置在this中。
 * 因此，任何值得继承的东西都应该放置在原型中实现。
 * 所以仅将子对象的原型与父对象的原型设置为相同的就可。
 */
function inherit(C, P) {
    C.prototype = P.prototype;
}

/**
 * 类式继承模式5：临时构造函数
 */
function inherit2(C, P) {
    var F = function() {};
    F.prototype = P.prototype;
    C.prototype = new F();
}