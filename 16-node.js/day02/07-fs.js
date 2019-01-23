//引入fs模块
var fs=require('fs');
/*//同步读取目录或文件
var stats1=fs.statSync('./node_modules/m6/index.json');
console.log('是否为文件：'+stats1.isFile());
console.log('是否为目录：'+stats1.isDirectory());*/

//异步读取一个目录或文件
fs.stat('./node_modules/m6',(err,stats)=>{
    if(err){
        console.log('文件操作失败');
        //console.log(err);
    }else{
        console.log('是否为文件：'+stats.isFile());
        console.log('是否为目录：'+stats.isDirectory());
    }
});

console.log('111111');