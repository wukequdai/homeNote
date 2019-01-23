<?php
  //加载公共php程序
  require('1_init.php');
?>
<html>
  <head>
    <title>搜狐新闻列表</title>
  </head>
  <body>
      <h3>新闻列表</h3>
	  <h3><a href='news_add.html'>创建新闻</a></h3>
	  <?php
	      //1:创建查询sql
		  $sql = "SELECT * FROM t_news";
		  //2:执行sql
		  $result = mysqli_query($conn,$sql);
		  //3:抓取每一行数据
		  //4:输出 ul>li>a
		  //5:参数?id 15:30--15:40
		  echo "<ul>";
		  while(true){
		   $row = mysqli_fetch_assoc($result);
           if($row===NULL){
		      break;
		   }
		   echo "<li><a href='news_detail.php?id=$row[nid]'>$row[title]</a>&nbsp;
		   <a href='news_del.php?id=$row[nid]'>删除</a></li>";

		  }
		  echo "</ul>";
	  ?>
  </body>
</html>