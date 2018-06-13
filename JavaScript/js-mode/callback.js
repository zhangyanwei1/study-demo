//
var findNodes = function () {
    var i = 1000,//循环
        nodes = [],//存储节点
        found;//找到的节点
    while (i) {
        i -= 1;
        //...
        nodes.push(found);
    }
    return nodes;
}

//影藏节点函数
var hide = function (nodes) {
    var i = 0, max = nodes.length;
    for(; i < max; i += 1) {
        nodes[i].style.display = "none";
    }
}

//执行隐藏
hide(findNodes());

//优化 节点函数
var findNodes = function (callback) {
    var i = 1000,//循环
        nodes = [],//存储节点
        found;//找到的节点

    //检查回调函数是否可以调用
    if (typeof callback !== "function") {
        callback = false;
    }
    while (i) {
        i -= 1;
        //...
        //运行回调函数
        if (callback) {
            callback(found);
        }
        nodes.push(found);
    }
    return nodes;
}
//优化隐藏函数
var hide = function (node) {
    node.style.display = "none";
}

//再次执行
findNodes(hide);

//回调与作用域，假如传入的回调函数是一个对象的函数，函数中使用了对象this的属性，那么执行时可能需要注意处理这种意外。