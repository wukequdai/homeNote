var fs=require('fs');
fs.readFile('./01.js',(err,data)=>{
    if(err){
        console.log('读取文件失败');
    }else{
        console.log(data);
        console.log(data.toString());
    }
});

//向文件中写入内容
var file1='./log/index.html';
var data1='<html><head></head><body>欢迎来到我的主页</body></html>';
fs.writeFile(file1,data1,(err)=>{
    if(err){
        console.log('文件内容写入失败');
    }else{
        console.log('文件内容写入成功');
    }
});

//删除文件
fs.unlink('./log/out2.log',(err)=>{
    if(err){
        console.log('删除失败');
    }else{
        console.log('删除成功');
    }
});

//重命名文件
var oldName='./log/out.log';
var newName='./log/new.log';
fs.rename(oldName,newName,(err)=>{
    if(err){
        console.log('重命名失败');
    }else{
        console.log('重命名成功');
    }
});



