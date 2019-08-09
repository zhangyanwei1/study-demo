const _ = require('underscore');

// 把一个二维数组变成一个一维数组
function cat() {
    var head = _.first(arguments);
    if (head) {
        return head.concat.apply(head, _.rest(arguments))
    } else {
        return [];
    }
}

function construct(head, tail) {
    return cat([head], _.toArray(tail));
}

const arr = construct(42, [1, 3]); // [42, 1, 3];

var table = [
    {title: 'SISP', lsbn: '02620', ed: 1},
    {title: 'SISP', lsbn: '02625', ed: 2},
    {title: 'Joy of Clojure', lsbn: '1987', ed: 1},
];

_.pluck(table, 'title');

function project(table, keys) {
    return _.map(table, function(obj) {
        // 对象和keys组成数组，apply第二个参数：参数列表组成的数组。
        // 挑出keys 字段组成的对象
        return _.pick.apply(null, construct(obj, keys));
    })
}
const editions = project(table, ['title', 'lsbn']);