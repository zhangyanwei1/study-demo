//sayModule.js
function SayModule () {
    this.hello = function () {
        console.log('hello');
    };
 
    this.goodbye = function () {
        console.log('goodbye');
    };
}
 
module.exports = SayModule;

/**
 * 作为一个服务器端的解决方案，CommonJS 需要一个兼容的脚本加载器作为前提条件。
 * 该脚本加载器必须支持名为 require 和 module.exports 的函数，它们将模块相互导入导出。
 */
