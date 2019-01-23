/*

/!*console.log()*!/
console.log("msg1");
console.log("msg1","msg2",20,true,new Date());
var user={uname:"tom",age:20};
/!*输出：该用户的名字为：tom，年龄为：20。*!/
console.log(`该用户的名字为：${user.uname}，年龄为：${user.age}。`);
/!*%号占位符，每一个占位符对应后面的每一个参数，s%表示string烈性，d%表示number类型*!/
console.log('该用户的名字为：%s，年龄为：%d。',user.uname,user.age);
/!*console.info()*!/
console.info('该用户的名字为：%s，年龄为：%d。',user.uname,user.age);
/!*console.error()*!/
console.error('该用户的名字为：%s，年龄为：%d。',user.uname,user.age);
/!*console.warn()*!/
console.warn('该用户的名字为：%s，年龄为：%d。',user.uname,user.age);
/!*console.dir()*!/
console.dir(user);
var arr=["tom",20,true]
console.dir(arr);
/!*console.log和console.dir的区别*!/
console.log(Buffer)
console.dir(Buffer,{colors:true})

/!*console.assert()*!/
function add(n1,n2){
    return n1+n2;
}
console.assert(add(1,1)==2,"add()函数执行结果不符合要求");
/!*console.time() && console.timeEnd()*!/
console.time("code1");
var sum=0;
for(var i=0;i<1000000;i++){
    sum+=sum;
}
console.timeEnd("code1");

*/

/*向指定输出流对象中执行输入*/
//引入fs模块
var fs=require("fs");
//创建写入流
var out=fs.createWriteStream("./log/out.log");
var err=fs.createWriteStream("./log/err.log");
//使用console对象中的Console构造函数，创建一个文件写入器，向指定文件中写入内容
var logger=new console.Console(out,err);
logger.log(`数据库连接成功，at：${new Date()}`);
logger.error(`数据库连接失败，at：${new Date()}`);





