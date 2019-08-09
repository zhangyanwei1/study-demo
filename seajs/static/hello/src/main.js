// 所有模块都通过 define 来定义
define(function(require, exports, module) {
    // 通过 require 引入依赖
    var $ = require('jquery');
    
    // 相当于调用的是 /node_modules/underscore/underscore-min.js
    var _ = require("underscore/underscore-min");
    console.log(require.resolve("underscore/underscore-min"));

    console.log('main');
    // 通过 exports 对外提供接口
  
    // 或者通过 module.exports 提供整个接口
  
});