/**
 *Worker线程不允许使用任何的BOM和DOM对象
 */

console.log('开始质数运算...');
console.time('质数判定');  //开始计时
var num = 113;
var result = isPrime(num);
console.timeEnd('质数判定')  //计时结束
//console.log(num+'是质数吗：'+result);
//alert(num+'是质数吗：'+result);
//window.alert(num+'是质数吗：'+result);
document.getElementById('msg').innerHTML = num+'是质数吗：'+result;






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