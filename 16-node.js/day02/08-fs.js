var fs=require('fs');
//读取一个目录，若此目录不存在的话，则创建；若存在的话，则删除
var path1='./test';
fs.stat(path1,(err,stats)=>{
    if(err){//目录不存在
        //创建目录
        fs.mkdir(path1,(err)=>{
            if(err){
                console.log('创建目录不成功');
            }else{
                console.log('创建目录成功！');
            }
        });
    }else{//目录存在
        fs.rmdir(path1,(err)=>{
            if(err){
                console.log('删除目录不成功');
            }else{
                console.log('删除目录成功！');
            }
        });
    }
});

//读取目录下的内容
var path2='./node_modules';
fs.readdir(path2,(err,list)=>{
    if(err){
        console.log("读取目录失败");
    }else{
        console.log('读取目录成功');
        console.log(list);
    }
});




