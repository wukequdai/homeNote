var path=require('path');
var pathStr='D:/hanxl/nodejs/day02/01.js';
console.log(path.parse(pathStr));
var pathObj={
    dir:'d:/hanxl/day01',
    base:'02-console.js'
};
console.log(path.format(pathObj));
//Á¬½ÓÂ·¾¶
console.log(path.join('d:','hanxl','day02','01.js'));

console.log(path.resolve('d:/hanxl/day02/node_modules','../m5/index.js'));
console.log(path.relative('d:/hanxl/day02/node_modules','d:/hanxl/day02/m5/index.js'));

