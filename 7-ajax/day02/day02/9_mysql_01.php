<?php    
//1:连接mysql服务器   
$conn = mysqli_connect('127.0.0.1','root',
	'','tarena');
//2:设置编码
$sql = "set names utf8";
mysqli_query($conn,$sql);
//3:执行sql
$sql = "INSERT INTO t_class VALUES(null,'北北9','tom')";
$result = mysqli_query($conn,$sql);
//4:查看mysql服务器返回结果
if($result){//true
	echo "添加成功";
}else{      //false
    echo "添加失败";
}
?>
