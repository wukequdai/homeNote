<?php
/**
*接收客户端提交的uid，查询该用户的抽奖统计信息，形如：
 { "uid": 10,  "total": 39,  "used":  3}
*/
header('Content-Type: application/json');

@$uid = $_REQUEST['uid'] or die('{"code":401, "msg":"uid required"}');

//即将要输出给客户端统计数据
$output = [
  'uid'=>$uid,
  'total'=>0,
  'used'=>0
];

require('1_init.php');

//SQL1: 根据用户编号获取所有订单的总金额
$sql = "SELECT SUM(price) FROM jd_order WHERE userId=$uid";
$result = mysqli_query($conn,$sql);
$sum = mysqli_fetch_row($result)[0];
$output['total'] = floor($sum/1000);

//SQL2: 根据用户编号获取已抽奖次数
$sql = "SELECT COUNT(*) FROM jd_lottery WHERE userId=$uid";
$result = mysqli_query($conn,$sql);
$output['used'] = intval(mysqli_fetch_row($result)[0]);

echo json_encode($output);
