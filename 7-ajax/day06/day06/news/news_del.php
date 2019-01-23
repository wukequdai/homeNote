<?php
 //1：获取参数新闻id
 $id = $_REQUEST['id'];
 //2:连接数据库设置编码
 require('1_init.php');
 //3:创建SQL 执行
 $sql = "DELETE FROM t_news WHERE nid=$id";
 $result = mysqli_query($conn,$sql);
 if($result){
   echo "删除成功 <a href='news_list.php'>返回列表</a>";
 }else{
   echo "删除失败 <a href='news_list.php'>返回列表</a>"; 
 }

?>