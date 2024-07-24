const path = require('path');
console.log(path.join('/abc','/def'));
console.log(path.normalize('/abc/abc/bnv/..'));
console.log(path.resolve('./hiii','./how'));
//console.log(path.normalize('./hiii','./how'));
console.log(path.dirname('/abc/how'));