<?php
/**
*接收客户端提交uid，查询出该用户有哪些订单，形如：
 [
    {"oid":81128005, "rcvName":"强东爸"...,"productList":[ { },{ } ] },
    {"oid":81128006, "rcvName":"强东妈"...,"productList":[ { },{ } ] },
 ....
 ]
*/
header('Content-Type: application/json');

@$uid = $_REQUEST['uid'] or die('{"code":401,"msg":"uid required"}');

require('1_init.php');

//根据用户编号查询其所有的订单信息
$sql = "SELECT * FROM jd_order WHERE userId=$uid";
$result = mysqli_query($conn, $sql);
$orderList = mysqli_fetch_all($result, MYSQLI_ASSOC);

//遍历每个订单，查询该订单所购买的产品信息
foreach($orderList as $i=>$order){
    $oid = $order['oid'];   //订单编号
    $sql = "SELECT * FROM jd_product WHERE pid IN (SELECT productId FROM jd_order_detail WHERE orderId=$oid)";//根据订单编号查询产品编号，再查询产品信息
    $result = mysqli_query($conn,$sql);
    $productList = mysqli_fetch_all($result, MYSQLI_ASSOC);
    //$order['age'] = 9999;
    $orderList[$i]['productList'] = $productList;
}

/*
$arr = [1, 3, 5]
foreach($arr as $i=>$n){
    //$n++;     //仅影响临时变量$n
    $arr[$i]++; //可能修改原始数组内容
}
var_dump($arr);
*/


echo json_encode($orderList);