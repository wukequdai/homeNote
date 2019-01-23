<?php
  $id = $_REQUEST['id'];
  $conn = mysqli_connect('127.0.0.1','root','','humaiche');
  //设置编码
  $sql = "set names utf8";
  mysqli_query($conn,$sql);
  //执行sql
  $sql = "DELETE FROM t_msg WHERE id=$id";
  $result = mysqli_query($conn,$sql);
  if($result){
	  echo "删除成功 <a href='msg_select.php'>返回首页</a>";
  }else{
	  echo "删除失败 <a href='msg_select.php'>返回首页</a>";   
  }
?>