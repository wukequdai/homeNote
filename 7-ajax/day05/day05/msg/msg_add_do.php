<?php
//先测试获取数据
//var_dump($_REQUEST);
//1:获取参数 3个
$author = $_REQUEST['author'];
$email = $_REQUEST['email'];
$cont = $_REQUEST['cont'];
//2:连接数据库
//3:设置编码
$conn = mysqli_connect('127.0.0.1','root',
'','humaiche');
//c:设置编码
$sql = "set names utf8";
mysqli_query($conn,$sql);
//4:创建sql 执行????
$sql = "INSERT INTO t_msg VALUES";
$sql .= "(null,'$author','$cont',now()";
$sql .= ",'$email')";
//echo $sql;
//5:判断如果发表成功 msg_select.php
//6:发表失败         msg_add.html
$result = mysqli_query($conn,$sql);
if($result){
	echo "发表成功 <a href='msg_select.php'>go</a>";
}else{
    echo "发表失败 <a href='msg_add.html'>go</a>";
}
?>