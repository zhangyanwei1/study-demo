/**
 * 将私有方法提示为公共方法，
 * 共有方法可能在用户使用时被无意修改
 */
var myarray;
(function () {
    //私有变量
    var astr = "[object Array]",
        toString = Object.prototype.toString;
    //私有函数
    function isArray(a) {
        return toString.call(a) === astr;
    }

    function indexOf(haystack, needle) {
        var i = 0,
            max = haystack.length;
        for(; i < max; i += 1) {
            if(haystack[i] === needle) {
                return i;
            }
        }
        return -1;
    }
    //返回公共访问功能
    myarray = {
        isArray: isArray,
        indexOf: indexOf,
        inArray: indexOf
    }
}());