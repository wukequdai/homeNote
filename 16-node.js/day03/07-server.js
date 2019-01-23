/*创建一个动态web服务器，实现登录及注册功能*/
//引入模块
var http=require('http');
var url=require('url');
var fs=require('fs');
var mysql=require('mysql');
//创建web服务器
var server=http.createServer();
//为web服务器的request事件绑定处理程序
server.on('request',doRequest);

//启动web服务器，监听指定端口号
server.listen(8000,'127.0.0.1',(err)=>{
    if(err){
        console.log('web服务器启动失败');
        console.log(err);
    }else{
        console.log('web服务器启动成功，正在监听8000端口。。。');
    }
});

function doRequest(req,res){
    console.log('接收到一个请求：'+req.url);
    //解析url
    var urlInfo=url.parse(req.url);
    switch (urlInfo.pathname){
        case '/test/login.do':
            //处理登录
            doLogin(req,res);
            break;
        case '/test/register.do':
            //处理注册
            break;
        default :
            //处理静态请求
            doStatic(req,res);
    }
}
//处理静态请求
function doStatic(req,res){
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
}

//处理登录
function doLogin(req,res){
    //连接数据库
    var options={
        host:'127.0.0.1',
        user:'root',
        password:'',
        database:'test'
    };
    var conn=mysql.createConnection(options);
    //提交sql语句给mysql服务器执行
    var urlInfo=url.parse(req.url,true);
    var uname=urlInfo.query.uname;
    var upwd=urlInfo.query.upwd;

    var sql=`SELECT * FROM user WHERE uname='${uname}' AND upwd='${upwd}'`;
    conn.query(sql,(err,rows)=>{
        if(err){
            console.log('操作数据库失败')
        }else{
            if(rows.length>0){//登录成功
                res.statusCode=200;
                res.setHeader('Content-Type','text/html;charset=utf-8');
                res.write('登录成功');
                res.end();

            }else{
                res.statusCode=200;
                res.setHeader('Content-Type','text/html;charset=utf-8');
                res.write('登录失败');
                res.end();
            }
        }
    });
}


