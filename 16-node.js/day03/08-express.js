//引入express模块
var express=require('express');
//创建express类的实例作为http服务器
var app=express();
//启动服务器
app.listen(8000);

//匹配路由
/*//访问根目录
app.get('/',(req,res)=>{
    res.send('访问的是根目录');
});
//访问具体的目录或文件
app.get('/test/',(req,res)=>{
    res.send('您访问的是test目录');
});*/
/*//可以使用字符串模式匹配路径
app.get('/test/!*',(req,res)=>{
    res.send('您访问的是test目录下的内容');
});*/
/*
//可以使用正则表达式匹配路径
app.get(/\/test/,(req,res)=>{
    res.send('您访问的是test目录下的内容');
});*/


//访问当前项目下所有的静态文件
app.use(express.static(__dirname));
//指定某一个路径下的静态文件
//app.use('/test',express.static('test'));
//将路由/htdocs映射到/test目录下
//app.use('/htdocs',express.static('test'));

app.use('/test/login.do',(req,res,next)=>{},(req,res)=>{})
app.use('/test/register.do',(req,res)=>{})
