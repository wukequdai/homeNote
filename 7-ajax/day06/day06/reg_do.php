<?php
  //完成用户名是否存功能
  //不是注册
  //1:获取用户参数name
  $name = $_REQUEST['name'];
  //2:连接数据库
  //3:设置编码
  require('1_init.php');
  //4:创建查询 sql语句
  //5:执行sql
  $sql = "SELECT count(id) AS c FROM t_user";
  $sql .=" WHERE name='$name'";
  //6:获取获取结果  
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  if($row['c']==='0'){
     echo "bucunzai";
  }else{
     echo "cunzai";
  }
?>