/*查询mysql数据库中的数据*/
//引入mysql模块
var mysql=require('mysql');

//创建一个连接
var option={
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'test'
};
var conn=mysql.createConnection(option);
//连接数据库
conn.connect();
//提交SQL语句给mysql服务器执行
var sql='SELECT * FROM user';
conn.query(sql,(err,rows)=>{
    if(err){
        console.log('数据库操作失败');
    }else{
        console.log('数据库操作成功');
        console.log(rows.length);
        for(var i=0;i<rows.length;i++){
           console.log(rows[i].uname+','+rows[i].phone);
        }
    }
});
//断开与mysql服务器的连接
conn.end();
