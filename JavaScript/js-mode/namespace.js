var MYAPP = MYAPP || {};
/**
 * 检查定义的属性是否已经存在，存在就不定义，不存在即定义；
 * @param 定义属性完整字符串
 */
MYAPP.namespace = function (ns_string) {
    //分离属性字符串
    var parts = ns_string.split('.'),
        parent = MYAPP,
        i;
    //剥离最前面的冗余全局变量
    if (parts[0] === 'MYAPP') {
        parts = parts.slice(1);
    }
    for (i = 0; i < parts.length; i += 1) {
        if(typeof parent[parts[i]] === 'undefined') {
            //如果属性不存在就创建一个属性
            parent[parts[i]] = {};
        }
        //下一个循环将父对象往下赋值
        parent = parent[parts[i]];
    }
    //将定义好的属性返回
    return parent;
}