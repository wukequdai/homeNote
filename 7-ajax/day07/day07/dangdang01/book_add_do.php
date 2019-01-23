<?php
header("content-type:text/plain;charset=utf-8");
//先测试获取数据
//1:获取参数 3个
$name = $_REQUEST['name'];
$price = $_REQUEST['price'];
//2:连接数据库
//3:设置编码
$conn = mysqli_connect('127.0.0.1','root',
'','dangdang');
//c:设置编码
$sql = "set names utf8";
mysqli_query($conn,$sql);
//4:创建sql 执行????
$sql = "INSERT INTO t_book VALUES";
$sql .= "(null,'$name','$price',now())";
$result = mysqli_query($conn,$sql);
if($result){
	echo "success";
}else{
    echo "error";
}
?>