//var f=function(){
//  var a=b=1;
//}
//f();
//console.log(b);//1
//console.log(a);//报错

//var f=function(){
//  var a=b=1;
//}
//setTimeout(f,0);
//console.log(b);//报错
////f();

//var a,b=0,
//    fn=function(){
//      var a=b=2
//    };
//fn();
//console.log(a);//undefined
//console.log(b);//2

var emp={
  work:function(){
    var sum=0;
    for(var i=0;
        i<arguments.length
          &&arguments[0]>0;
        i++
    ){
      sum+=arguments[i]+arguments.callee(--arguments[i])
    }
    return sum;
  }
}//arguments.callee->work
console.log(emp.work(3,2,1));

















