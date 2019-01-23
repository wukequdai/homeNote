/**
 * Default: ES6允许在函数定义时为参数定义默认值
 *   调用时: 如果未传入参数，则默认使用函数定义时提前准备的默认值
 *   何时: 希望函数的参数不传值，也有默认值使用是
 *   强调: 有默认值的参数必须定义在没有默认值的参数之后
 */
var arr=[1,2,3,2,1];
       //  1   3
function indexOf(arr,val,fromi=0){
  //fromi=fromi||0;
  for(var i=fromi;i<arr.length;i++){
    if(arr[i]===val) return i;
  }return -1;
}
console.log(
  indexOf(arr,2/*,0*/),
  indexOf(arr,2,2)
);

/*
  Rest: 接收剩余参数的新的简便方式
    何时: 只要不确定传入函数的参数个数时，就用rest方式代替arguments
    为什么: arguments 2个问题:
      1. 类数组对象，无法使用数组API
      2. 无法有选择的获取部分参数
   Rest:
      1. 返回的是纯正的数组
      2. 可选择获取部分参数
    如何: 只要在固定参数后，添加: ...数组名
    原理: 其实相当于[].slice.apply(arguments,n)
 */
function add(name,...bonus){
  console.log(name+"的总工资是"+
    bonus.reduce(
    (prev,val)=>prev+val
    )
  );
}
add("Li Lei",1000,2000,3000);


/*
  spread: 和解构相似,专门用于将一个数组打散，再传入函数
    何时: 只要希望打散数组类型参数时就用spread语法代替apply
    如何: 比如: 函数fun(a,b,c){...}
          调用: fun(...arr)
          ...将arr打散后，分别传递给a,b,c
    相当于: fun.apply(null,arr);
 */
var arr=[2,1,5,4];
       //0 1 2
console.log(Math.max.apply(null,arr));
//可简写为
console.log(Math.max(...arr));

var arr2=[12,23,34];
arr.splice(2,0,...arr2);
console.log(arr.length);//7

