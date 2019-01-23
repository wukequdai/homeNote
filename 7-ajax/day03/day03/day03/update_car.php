<?php
$cid = $_REQUEST['cid'] or die('cid required');
$cname = $_REQUEST['cname'] or die('cname required');
$price = $_REQUEST['price'] or die('price required');

$conn = mysqli_connect('127.0.0.1','root','','humaiche');
$sql = "set names utf8";
mysqli_query($conn,$sql);
$sql = "UPDATE t_car SET cname='$cname',price=$price WHERE cid=$cid";
$result = mysqli_query($conn,$sql);
if($result){
	echo "更新成功";
	echo "<a href='index.html'>返回首页</a>";
}
//15:00--15:10 完成更新
//15:10--15:20 休息


?>