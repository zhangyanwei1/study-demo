const _ = require('underscore');

var zombie = {name: 'Bub', film: 'Day of the Dead'};

// 键值数组
const keysArr = _.keys(zombie);

const titles = [{title: 'ch', author: 'Anth'}, 
                {title: 'Gr', author: 'GArder'},
                {title: 'Aft'}];
// 传入集合，与给定键；返回这个键值对应的值组成的数组
// SELECT author FROM titles
const authorsArr = _.pluck(titles, 'author'); // ['Anth', 'GArder', undefined]

// 对象转为 键值对的二维数组
const keyValueArr = _.pairs(zombie); // [ ['name', 'Bob'], ['film', 'Day of the Dead'] ]

// 将键值对数组变成对象
const changeObject = _.object(keyValueArr);

// 给对象添加属性默认值，扩充对象
_.defaults(zombie, {age: 0});

// 给对象提供黑名单，筛选黑名单之外的属性，返回筛选后的新对象
const blackObj = _.omit(zombie, 'name'); // {film: 'Day of the Dead'}

// 给对象提供白名单，只保留白名单组成的新对象
const whiteObj = _.pick(zombie, 'name'); // {name: 'Bub'}

// 选择器函数
var library = [
    {title: 'SISP', lsbn: '02620', ed: 1},
    {title: 'SISP', lsbn: '02625', ed: 2},
    {title: 'Joy of Clojure', lsbn: '1987', ed: 1},
];
_.findWhere(library, {title: 'SISP', ed: 2}); // 返回符合条件的第一个值
_.where(library, {title: 'SISP', ed: 2}); // 返回所有符合条件的值

_.range(2);
