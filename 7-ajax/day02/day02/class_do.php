<?php
 //1:获取用户提交的参数
 $name = $_REQUEST['name'];
 $teacher = $_REQUEST['teacher'];
 //2:连接数据库
 $conn = mysqli_connect('127.0.0.1','root','','tarena');
 $sql = "set names utf8";
 mysqli_query($conn,$sql);
 //3:执行sql
 $sql = " INSERT INTO t_class VALUES(null,'$name','$teacher');";
 //echo $sql;
 $result = mysqli_query($conn,$sql);
 if($result){
 	echo "班级信息注册成功 <a href='index.html'>返回首页</a>";
 }else{
 	echo "班级信息注册失败  <a href='index.html'>返回首页</a>";
 }
?>