/**
 * 解构: 简化同时为多个变量赋值
 * 何时: 使用数组和对象，为多个变量批量赋值——打散数组/对象
 * 如何: 2种:
 *   1. 解构数组: 用下标匹配变量名和变量值
 *   2. 解构对象: 用属性名匹配变量名和变量值
 */
//解构数组:
var arr=[1,2,3];
//var a=arr[0],b=arr[1],c=arr[2];
var [a,b,c]=arr;
  // 0 1 2
  //[1,2,3]
console.log(a,b,c);

//解构对象:
function today(){
  return {year:2017,month:2,date:21};
}
var {date:d, month:m,year:y}=today();
  //{date:21,month:2,year:2017}
console.log(d,m,y);

//函数参数:
//补:ES6: 对象直接量中如果属性名和变量名相同，可省略其一
function g({name:n,age:a}){
  console.log(n,a);
}
var lilei={
  name:"Li Lei",
  age:11
}
g(lilei);


