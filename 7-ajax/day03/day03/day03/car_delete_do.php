<?php
//删除汽车信息
//获取删除汽车 cid
@$cid = $_REQUEST['cid']or die('cid required');  
//连接数据库
$conn = mysqli_connect('127.0.0.1','root','','humaiche');
//设置编码
$sql = "set names utf8";
mysqli_query($conn,$sql);
//执行delete操作
$sql = "DELETE FROM t_car WHERE cid=$cid";
//依据返回值，显示结果
$result = mysqli_query($conn,$sql);
//如果删除成功 index.html
if($result){
	echo "删除成功";
	echo "<a href='index.html'>返回首页</a>";
}else{
	echo "删除失败";
}

?>