<?php
//a:获取用户参数 用户名密码
$name = $_REQUEST['name'];
$pwd = $_REQUEST['pwd'];
//b:连接数据库
$conn = mysqli_connect('127.0.0.1','root',
'','humaiche');
//c:设置编码
$sql = "set names utf8";
mysqli_query($conn,$sql);
//d:添加数据库  t_login
$sql = "INSERT INTO t_login VALUES(null,'$name','$pwd')";
//insert     11:11--11:21
$result = mysqli_query($conn,$sql);
//e:成功判断  
if($result){
  echo "注册成功";
}else{
  echo "注册失败";
}
?>