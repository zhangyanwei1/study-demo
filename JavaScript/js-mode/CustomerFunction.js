//自定义函数
var scareMe = function () {
	console.log("zhang!");
	scareMe = function () {
		console.log("change zhang!");
	}
}
//使用自定义函数
scareMe();//zhang!
scareMe();//change zhang!

/**
 * 其他情况
 * 1、添加一个新的属性
 * 2、函数对象被分配给一个新的变量
 * 3、改函数移一个方法的形式使用
 */

//1 添加一个属性
scareMe.propery = "name";

//2 赋值给另一个不同名称的变量
var prant = scareMe;

//作为一个方法
var foo = {
    prant: scareMe
}

//赋值给其他变量执行
prant();//zhang!
scareMe.propery; //undefined
prant();//zhang!
scareMe();//change zhang!
prant.propery; //name

//作为方法调用
foo.prant();//zhang!
foo.prant();//zhang!
foo.prant.propery;//name

//使用自定义函数
scareMe();//change zhang!
scareMe();//change zhang!
scareMe.propery; //undefined

/**
 * 当函数赋值给另一个变量和作为方法调用时，
 * 这些调用不断重写全局的scareMe函数指针。
 * 当他最终自己被调用时，它才第一次具有更新函数并执行新的函数。
 */

/**
 * 自定义函数作用：
 * 当您的函数有一些初始化准备工作要做，并且只需要执行一次，就可以使用这种方法。
 * 缺点：
 * 当它重新定义自身时，之前添加到该函数的属性都会丢失，
 * 另外，将它分配给变量和对象方法调用时，自定义部分则永远不会执行。
 */