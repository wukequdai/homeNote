<?php
  //接收客户端提交的书名中关键字 kw
  //如:"css"
  //返回包含该关键字的所有完整书名
  //形如
  //<li>css指南</li>
  //<li>css大全</li>
  //1:强制请php输出格式text/html
  header('Content-Type:text/html;charset=utf-8');
  //2:获取参数  10:40--10:45
  $kw = $_REQUEST['kw'];
  //3:连接数据库
  require('1_init.php');
  //4:创建sql
  $sql = "SELECT * FROM t_book";
  $sql .= " WHERE name LIKE '%$kw%'";
  //5:抓取结果输出
  $result = mysqli_query($conn,$sql);
  $html = "";///10:52---10:55
  while(true){
    $row = mysqli_fetch_assoc($result);
	if($row===NULL){
	   break;
	}
	$html .= "<li>$row[name]</li>";
  }
  echo $html;
?>