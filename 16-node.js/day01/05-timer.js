//setTimeout()，创建一个简单的一次性定时器
/*var counter1=0;
var timer1=setTimeout(()=>{
    counter1++;
    console.log('%d hello!',counter1);
    clearTimeout(timer1);
},1000);*/

//setInterval()，创建一个周期性定时器，输出1,2,3,4,5
/*
var counter2=0;
var timer2=setInterval(()=>{
    counter2++;
    if(counter2<=5){
        console.log(counter2);
    }else{
        clearInterval(timer2);
    }
},1000);
*/


//使用setTimeout()，创建一次性定时器，达到setInterval()的效果，输出1,2,3,4,5
/*
var counter3=0;
var timer3=setTimeout(function(){
    counter3++;
    if(counter3<=5){
        console.log(counter3);
        setTimeout(arguments.callee,1000);
    }else{
        clearTimeout(timer3);
    }
},1000);
*/

//setImmediate基本使用方式
/*
setImmediate(()=>{
    console.log("Immediate...");
});
console.log("end...");
*/

//测试定时器的执行顺序
setImmediate(()=>{
    console.log("Immediate 1...");
});
process.nextTick(()=>{
    console.log("NextTick 1...");
});
setTimeout(()=>{
    console.log("Timeout 1...");
},100);
setImmediate(()=>{
    console.log("Immediate 2...");
});
process.nextTick(()=>{
    console.log("NextTick 2...");
});
console.log("string...");


