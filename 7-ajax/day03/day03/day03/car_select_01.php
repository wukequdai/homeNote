<?php
  //查询数据库 humaiche t_car

  //连接数据库
  $conn = mysqli_connect('127.0.0.1','root','','humaiche');
  //设置编码
  $sql = "set names utf8";
  mysqli_query($conn,$sql);
  //创建sql
  $sql = "SELECT * FROM t_car";
  //执行
  $result = mysqli_query($conn,$sql);
  //var_dump($result);
  //查询sql执行结果返回结果集(查询结果table)
  //读取数据1:抓取一行,返回一个索引数组
  //$row = mysqli_fetch_row($result);
  //var_dump($row);
  //$row = mysqli_fetch_row($result);
  //var_dump($row);  
  //$row = mysqli_fetch_row($result);
  //var_dump($row);
  //$row = mysqli_fetch_row($result);
  //var_dump($row);  
  //$row = mysqli_fetch_row($result);
  //var_dump($row);   
  //读取数据2:抓取一行，返回关联数组
  //$row = mysqli_fetch_assoc($result);
  //var_dump($row);
  //$row = mysqli_fetch_assoc($result);
  //var_dump($row);
  //$row = mysqli_fetch_assoc($result);
  //var_dump($row);
  //$row = mysqli_fetch_assoc($result);
  //var_dump($row); 
  //$row = mysqli_fetch_assoc($result);
  //var_dump($row);
  //读取数据3 抓取所有行--二维数组
  $list = mysqli_fetch_all($result,MYSQLI_ASSOC);
  var_dump($list);
?>