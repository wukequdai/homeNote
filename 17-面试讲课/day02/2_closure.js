//var a=0,b=0;
//function A(a){
//  A=function(b){console.log(a+b++);}
//  console.log(a);
//}
//A(1);//1
////A:function(b){ (a=1)
//// console.log(a+b++);
//// }
//A(12);//13

//function fun(n,o){
//  console.log(o);//每次都输出第二个参数
//  return {//返回一个对象
//    fun:function(m){//对象中包含函数
//      return fun(m,n);//函数内保护了外层函数第一个参数
//    }
//  }
//}
//var a=fun(0); //undefined
////a:{fun:function(m){return fun(m,n);(n=0)}}
//    a.fun(1); //0
//    a.fun(2); //0
//    a.fun(3); //0
//var b=fun(0)  //undefined
////{fun:function(m){return fun(m,n);(n=0)}}
//      .fun(1) //0
////{fun:function(m){return fun(m,n);(n=1)}}
//      .fun(2) //1
////{fun:function(m){return fun(m,n);(n=2)}}
//      .fun(3);//2
////{fun:function(m){return fun(m,n);(n=3)}}
//var c=fun(0)//undefined
//      .fun(1);//0
////{fun:function(m){return fun(m,n);(n=1)}}
//    c.fun(2); //1
//    c.fun(3); //1

//var arr=[];
//function fun(){
//  for(var i=0;i<4;i++){
//    var x={};
//    //x.no=i;
//    //x.text=arr[i];
//    x.fun=function(){console.log(i)};
//    arr.push(x);
//  }//i=4
//}
//fun();
////arr[(i=4)
//// 0:x{fun:function(){console.log(i)}},
//// 1:x{fun:function(){console.log(i)}},
//// 2:x{fun:function(){console.log(i)}},
//// 3:x{fun:function(){console.log(i)}},
//// ]
//arr[0].fun();//4
//arr[1].fun();//4
//arr[2].fun();//4
//arr[3].fun();//4

//var funs=(function(){
//  for(var i=0,arr=[];i<3;i++){
//    arr[i]=function(){console.log(i)};
//  }//i=3
//  return arr;
//})();
////同一次外层函数调用，返回的多个内层函数对象，共用同一个受保护的变量。
////funs:[(i=3)
//// 0:function(){console.log(i)},
//// 1:function(){console.log(i)},
//// 2:function(){console.log(i)}
//// ]
//funs[0]();//3
//funs[1]();//3
//funs[2]();//3