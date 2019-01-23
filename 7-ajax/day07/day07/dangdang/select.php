<?php
  //1:强制请php输出格式text/html
  header('Content-Type:text/html;charset=utf-8');
  //2:获取参数  10:40--10:45
  //3:连接数据库
  require('1_init.php');
  //4:创建sql
  $sql = "SELECT * FROM t_book";
  //5:抓取结果输出
  $result = mysqli_query($conn,$sql);
  $html = [];///10:52---10:55
  while(true){
    $row = mysqli_fetch_assoc($result);
	if($row===NULL){
	   break;
	}
	$html[] = $row;
  }
  print_r($html);
?>