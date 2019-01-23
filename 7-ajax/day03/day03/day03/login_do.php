<?php
  //17:05---17:15 完成下述程序
  //17:15--17:25  休息
  //d.1:获取参数用户名
  $name = $_REQUEST['name'];
 //d.2:获取参数密码
  $pwd = $_REQUEST['pwd'];
  //d.3:连接数据库
  //d.4:设置编码
  $conn = mysqli_connect('127.0.0.1','root','','humaiche');
  $sql = "set names utf8";
  mysqli_query($conn,$sql);
  //d.5:!! 创建sql 依据参数中用户名和密码
  //       查询t_login
  $sql = "SELECT count(id) FROM t_login";
  $sql .= " WHERE name='$name' AND pwd='$pwd'";
  //a:第一步查询 mysqli_query();
  //b:第二步抓取 mysqli_fetch_row(); 
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_row($result);
  $rs = $row[0];
  //d.6:如果不存在该用户名或密码错误
  //    重新登录
  //d.7:如果正确 显示index.html 
  if($rs === '1'){
     echo "登录成功 <a href='index.html'>进入系统</a>";
  }else{
  	 echo "登录失败 <a href='login.html'>重新登录</a>";
  } 
?>