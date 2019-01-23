//创建子模块，求圆的周长和面积
const PI=3.14;
var size = function(r){
    return PI*r*r;
};
var perimeter=function(r){
    return 2*PI*r;
};
//判断当前模块是否主模块对象
var m;
if(module===process.mainModule){
    m=true;
}else{
    m=false;
}
console.log(m);
module.exports.s=size;
exports.p=perimeter;
exports.m=m;




