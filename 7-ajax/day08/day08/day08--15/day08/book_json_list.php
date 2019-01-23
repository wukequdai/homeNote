<?php
  //1:强制请php输出格式json
  header('Content-Type:application/json;charset=utf-8');
  //3:连接数据库
  require('1_init.php');
  //4:创建sql
  $sql = "SELECT * FROM t_book";
  //5:抓取结果输出
  $result = mysqli_query($conn,$sql);
  $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
  //6:!!!!!!! 将数组转json格式字符串
  $str = json_encode($rows);
  echo $str;
?>