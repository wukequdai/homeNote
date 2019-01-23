<?php
 //1:表单传递用户名密码
 //接收客户端提交的信息
 //php 预定义变量是一个数组
 //，其中保存着客户端提交的请求数据
 //var_dump($_REQUEST);
 $name = $_REQUEST['name'];
 $pwd = $_REQUEST['pwd'];
 //2:连接数据库
 $conn = mysqli_connect('127.0.0.1','root','','tarena');
 $sql = "set names utf8";
 mysqli_query($conn,$sql);
 //3:执行sql
 $sql = "INSERT INTO t_login VALUES(null,'$name','$pwd')";
 //echo $sql;
 $result = mysqli_query($conn,$sql);
 if($result){
 	echo "用户注册成功";
 }else{
 	echo "用户注册失败";     //16:36--16:41
 }
?>