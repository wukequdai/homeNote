/**
 *Worker线程接收UI主线程传递的数据
 */

//Worker线程接收到message事件
onmessage = function(e){
  console.log('开始质数运算...');
  console.time('质数判定');  //开始计时
  var num = e.data;  //读取UI线程传递过来的数据
  num = parseInt(num);
  var result = isPrime(num);
  console.timeEnd('质数判定')  //计时结束
  //console.log(num+'是质数吗：'+result);
  postMessage(num+'是质数吗：'+result); //Worker线程给UI主线程发消息
}





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