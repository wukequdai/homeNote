<?php
//10:35---10:50 完成下述功能
//1:修改响应消息头 json
header("content-type:application/json;charset=utf-8");
//2:连接数据库设置编码
require('init.php');
//3:创建查询sql语句
$sql = "SELECT * FROM jd_product";
//4:执行
$result = mysqli_query($conn,$sql);
//5:将所有数据结果保存二维数组
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
//6:转换json字符串
$str = json_encode($rows);
//7:响应输出
echo $str;