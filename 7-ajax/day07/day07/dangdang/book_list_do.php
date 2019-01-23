<?php
header('Content-Type:application/xml;charset=utf-8');
    //15:52---16:02 
	//?2.1:获取数据库中所有记录 dangdang/t_book
	//?2.2:转换二维数组
	require('1_init.php');
	$sql = "SELECT * FROM t_book";
	$result = mysqli_query($conn,$sql);
	//第一种方案:一维数组拼接
	//$rows = [];
	//while(true){
	//  $row = mysqli_fetch_assoc($result);
	//  if($row===NULL){
	//     break;
	//  }
    //  $rows[]=$row;
	//}
	//第二种方案:一次查询所有记录
	$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
	//2.3:将二维数组转换xml
	//2.4:输出xml
$html = "<?xml version='1.0' encoding='utf-8' ?>";
	$html .= "<books>";
    foreach($rows as $row){
		$html .= "<book>";
		$html .= "<id>$row[id]</id>"; 
		$html .= "<name>$row[name]</name>"; 
		$html .= "<price>$row[price]</price>"; 
        $html .= "</book>";
	}
	$html .= "</books>";
    echo $html;
?>