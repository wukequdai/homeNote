//引入http模块
var http=require('http');
var options={
    hostname:'www.tmooc.cn',
    port:'80',
    path:'/web/index_new.html'
};
//创建一个请求对象
var request=http.request(options,(response)=>{
    console.log("接收到了响应消息");
    console.log("状态码："+response.statusCode);
    console.log("响应头：");
    console.log(response.headers);
    response.on('data',(chunk)=>{
        console.log("响应内容：");
        console.log(chunk.toString());
    });
});
request.setTimeout(2000,()=>{
    request.abort();
    console.log('请求超时，已终止请求');
});
request.on('error',(err)=>{
    console.log('请求发生错误');
    console.log(err);
});
request.end();










