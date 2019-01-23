<?php
 //4.0:获取新闻id
 $id = $_REQUEST['id'];
 //4.1:更新id当新闻点击次数viewcount
 require('1_init.php');
 //a:创建更新语句
 $sql = "UPDATE t_news SET ";
 $sql .= " viewcount=viewcount+1";
 $sql .= " WHERE nid=$id";
 //b:发送mysql
 mysqli_query($conn,$sql);
 //4.2:查询新闻详细信息
 //c:创建查询语句
 $sql = "SELECT * FROM t_news";
 $sql .= " WHERE nid=$id";
 //d:发送mysql
 $result = mysqli_query($conn,$sql);
 //c:抓取结果
 //为什么不写循环 原因一行
 $row = mysqli_fetch_assoc($result);
 echo "<h1>新闻详细信息</h1>";
 echo "<ul>";
 echo "<li>新闻标题:$row[title]</li>";
 echo "<li>新闻内容:$row[content]</li>";
 echo "<li>新闻点击量:$row[viewcount]</li>";
 echo "</ul>";

?>