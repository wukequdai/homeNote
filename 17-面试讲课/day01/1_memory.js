//函数记忆: 让函数记住处理过的参数和处理结果
//为什么: 避免重复计算
//如何: 为执行操作的函数封装一个闭包，在闭包中保存一个关联数组，用来保存处理过的参数及其对应的处理结果
//判断一个数是不是质(素数)数:
//不带记忆:
function isPrime1(n){
  if(n<=3) return true;
  else{
    for(var i=2;i<=Math.sqrt(n);i++){
      if(n%i==0) return false;
    }
    return true;
  }
}
//带函数记忆:
var isPrime2=(function(){
  var hash={};
  return function(n){
    if(n<=3) return true;
    else if(hash[n]!==undefined)
      return hash[n];
    else{
      for(var i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
          hash[n]=false;
          return false;
        }
      }
      hash[n]=true;
      return true;
    }
  }
})();
//isPrime2:function(n){hash={}...}
console.log(
  isPrime2(91),//false
  isPrime2(111),//false
  isPrime2(103) //true
);
for(var i= 0,arr=[];i<1000000;i++){
  arr.push(
    parseInt(Math.random()*1000)
  );
}
console.time("isPrime1");
for(var i=0;i<arr.length;i++){
  isPrime1(arr[i]);
}
console.timeEnd("isPrime1");
console.time("isPrime2");
for(var i=0;i<arr.length;i++){
  isPrime2(arr[i]);
}
console.timeEnd("isPrime2");

