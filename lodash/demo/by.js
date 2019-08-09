const _ = require('lodash');

const people = [{name: 'Rick', age: 30}, {name: 'Jake', age: 24}];
const p2 = _.sortBy(people, function (p) {
    return p.age;
});
console.log(p2);