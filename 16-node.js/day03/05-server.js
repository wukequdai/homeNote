/*创建一个简单的web服务器，给客户端固定响应*/
//引入http模块
var http=require('http');
//创建web服务器
var server=http.createServer();

//为服务器的request事件绑定处理程序
server.on('request',(req,res)=>{
    console.log('web服务器接收到一个请求');
    console.log('请求方法：'+req.method);
    console.log('请求url：'+req.url);
    console.log('请求版本：'+req.httpVersion);
    console.log('请求头：');
    console.log(req.headers);
    //给客户端响应，响应固定内容
    //设置响应状态码
    res.statusCode=200;
    //设置响应消息头部
    res.setHeader('Content-Type','text/html;charset=utf-8');
    //向客户端输出响应消息主体
    res.write('<html>');
    res.write('<head>');
    res.write('</head>');
    res.write('<body><h1>我的web服务器测试</h1></body>');
    res.write('</html>');
    res.end();//输出完毕
});

//启动web服务器，监听一个特定端口
server.listen(8000,'127.0.0.1',(err)=>{
    if(err){
        console.log('web服务器启动失败');
        console.log(err);
    }else{
        console.log('web服务器启动成功，正在监听8000端口。。。');
    }
});


