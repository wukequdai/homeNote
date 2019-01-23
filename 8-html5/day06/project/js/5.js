/**
 *一个非常耗时的JS任务：
 * 不取决于代码量多少！取决于执行难度：深度递归、大量的循环嵌套
 */

console.log('开始质数运算...');
console.time('质数判定');  //开始计时
var num = 113;
var result = isPrime(num);
console.timeEnd('质数判定')  //计时结束
console.log(num+'是质数吗：'+result);





function isPrime(num){

  //模拟一段很耗时的程序
  var start = new Date().getTime();
  do{
    var now = new Date().getTime();
  }while(now-start<=5000);
  //模拟一段很耗时的程序

  var result = false;
  for(var i=2; i<num; i++){
    if(num%i===0){
      break;
    }
  }
  if(i===num){  //循环结束仍没有整除过
    result = true;  //是质数
  }
  return result;
}