/*创建一个静态web服务器，根据客户端请求，响应相应的内容*/
//引入模块
var http=require('http');
var url=require('url');
var fs=require('fs');
//创建web服务器
var server=http.createServer();
//为web服务器的request事件绑定处理程序
server.on('request',(req,res)=>{
    console.log('web服务器接收到一个请求，请求的url为：'+req.url);
    //获取请求的url
    var urlObj=url.parse(req.url);
    var fileName='.'+urlObj.pathname;
    //读取请求的文件
    fs.readFile(fileName,(err,data)=>{
        if(err){
            console.log('文件读取失败');
        }else{
            //给客户端响应
            res.statusCode=200;
            res.setHeader('Content-Type','text/html;charset=utf-8');
            res.write(data);
            res.end();
        }
    });

});

//启动web服务器，监听指定端口号
server.listen(8000,'127.0.0.1',(err)=>{
    if(err){
        console.log('web服务器启动失败');
        console.log(err);
    }else{
        console.log('web服务器启动成功，正在监听8000端口。。。');
    }
});

