<?php 
//目标:删除一个班级信息 cid=1   
//1:连接mysql服务器   
$conn = mysqli_connect('127.0.0.1','root','','tarena');
//2:设置编码
$sql = "set names utf8";
mysqli_query($conn,$sql);
//3:执行sql
$sql = "DELETE FROM t_class WHERE cid = 1";
$result = mysqli_query($conn,$sql);
//4:查看mysql服务器返回结果
if($result){
	echo "删除成功";
}else{
    echo "删除失败";
}

?>
