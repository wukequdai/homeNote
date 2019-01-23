<?php
  //目标查询所有留言 库humaiche 表t_msg
  //发布人   author
  //发布时间 ctime
  //联系方式 email
  //留言内容 cont


  //连接数据库
  $conn = mysqli_connect('127.0.0.1','root','','humaiche');
  //设置编码
  $sql = "set names utf8";
  mysqli_query($conn,$sql);
  //执行sql
  $sql = "SELECT * FROM t_msg";
  $result = mysqli_query($conn,$sql);
  //循环获取数据
  while(true){
   $row = mysqli_fetch_assoc($result);
   if($row===NULL){
     break;
   }
   echo "<hr />";
   echo "<ul>";
   echo "<li>发布人：$row[author]  发布时间:$row[ctime] <span><a href='msg_delete.php?id=$row[id]'>X</a></span></li>";
   echo "<li>联系方式: $row[email]</li>";
   echo "<li>内容:$row[cont]</li>";
   echo "</ul>";
  } //10:45---10:55
?>

<script src="jquery-1.11.3.js">
</script>
<script>
 
</script>