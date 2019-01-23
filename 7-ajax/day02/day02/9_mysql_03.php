<?php 
//目标:更新一个班级信息 cid=2  header_teacher
//tom   
//1:连接mysql服务器
$conn = mysqli_connect('127.0.0.1','root','','tarena');   
//2:设置编码
$sql = "set names utf8";
mysqli_query($conn,$sql);
//3:执行sql
$sql = "UPDATE t_class SET header_teacher='tom' WHERE cid = 2";
$result = mysqli_query($conn,$sql);
//4:查看mysql服务器返回结果
if($result){
	echo "更新成功";
}else{
	echo "更新失败";
}
//15:25---15:28
?>
