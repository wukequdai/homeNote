//获取主模块对象
/*console.log(process.mainModule);
console.log(require.main);*/

//引入其他模块，并使用模块中导出的方法
var fs=require("fs");
//读取一个文件
fs.readFile('./01.js',(err,data)=>{
    if(err){
        console.log("文件读取失败");
        console.error(err);
    }else{
        console.log(data.toString());
    }
});





