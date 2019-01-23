<?php
  //接收参数 name chinese
  $name =  $_REQUEST['name'];
  $chinese = $_REQUEST['chinese'];
  //连接数据库 设置编码
  require('1_init.php');
  //添加数据表中
  $sql = "INSERT INTO t_score VALUES";
  $sql .= "(null,'$name',$chinese)";
  //如果添加成功 输出字符串success error
  $result = mysqli_query($conn,$sql);
  if($result){
    echo "success";
  }else{
    echo "error";
  }
  //16:00---16:15 练习休息
?>