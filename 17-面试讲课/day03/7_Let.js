"use strict"; //let尽量配合严格模式
/**
 * let: 声明一个仅在当前块作用域中有效的函数
 *   块: 一个{}，就是一个代码块
 *       {}内就是一个块级作用域
 *   为什么: 避免声明提前破坏程序的执行顺序
 *   建议: 今后都用let代替var,避免声明提前
 *   原理: 禁止在let 变量之前使用该变量
 */
+function(){
  var t=0;//累计时间
  console.log("连接数据库")
  t+=0.3;//t=0.3
  +function(err){
    console.log("查询数据");
    t+=0.8;//t=1.1
    console.log("返回结果, 共耗时:"+t);

    //如果出错,就在日志中记录错误时间
    if(err){//let阻止了跨代码块的声明提前
      let t=new Date();
      console.log("发生错误:at "+t);
    }

  }(false);
}();

var n=10;
function fun(){
  console.log(n);
  let n=100;
  console.log(n);
}
fun(); //undefined 100
console.log(n);//10