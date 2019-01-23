/*向数据库中插入数据*/
//引入mysql模块
var mysql=require('mysql');
//创建mysql数据库的连接
var option={
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'test'
};
var conn=mysql.createConnection(option);
//连接数据库，可以省略
//conn.connect();
//提交SQL语句给mysql服务器执行
var sql='INSERT INTO user VALUES(NULL,"Mia","111111","13333333333")';
conn.query(sql,(err,result)=>{
    if(err){
        console.log("数据库操作失败");
    }else{
        console.log("数据库操作成功");
        console.log("sql语句影响的行数："+result.affectedRows);
        console.log("自增id为："+result.insertId);
    }
});
//断开连接
conn.end();




