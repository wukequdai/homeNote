<?php
  //1：获取参数新闻title
 $title = $_REQUEST['title'];
 $content = $_REQUEST['content'];

 //2:连接数据库设置编码
 require('1_init.php');
 //3:创建SQL 执行
 $sql = "INSERT INTO t_news VALUES(null";
 $sql .= ",'$title','$content',now(),0)";
 //echo $sql;
 $result = mysqli_query($conn,$sql);
 if($result){
   echo "删除成功 <a href='news_list.php'>返回列表</a>";
 }else{
   echo "删除失败 <a href='news_list.php'>返回列表</a>"; 
 }
?>