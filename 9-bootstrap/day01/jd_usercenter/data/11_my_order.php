<?php
/**
*接收客户端提交uid，查询出该用户有哪些订单，形如：
{
  totalCount: 23,  //满足条件的记录总数
  pageSize: 5,	  //页面大小，一页最多显示的记录数
  pageCount: 5,	  //页面总数量
  pageNum: 3,	  //当前显示的是哪页中的数据
  data: [{},{},{},{},{}] //当前页中的数据
}

*/
header('Content-Type: application/json');

@$uid = $_REQUEST['uid'] or die('{"code":401,"msg":"uid required"}');
@$pageNum = $_REQUEST['pageNum'];

if(! $pageNum ){ //客户端未提交要显示的页号
    $pageNum = 1;
}else {  //客户端提交了要显示的页号
    $pageNum = intval($pageNum); //把字符串解析为整数
}

//即将要输出给客户端的分页对象
$output = [
    'totalCount' => 0,
    'pageSize' => 5,
    'pageCount' => 0,
    'pageNum' => $pageNum,
    'data' => null
];

require('1_init.php');

//1 查询出满足条件的总记录数
$sql = "SELECT COUNT(*) FROM jd_order WHERE userId=$uid";
$result = mysqli_query($conn,$sql);
$output['totalCount'] = intval(  mysqli_fetch_row($result)[0]  );

//2 计算总页数
$output['pageCount'] = ceil( ($output['totalCount'])/($output['pageSize']) );

//3 根据用户编号查询其所有的订单信息
$start = ($output['pageNum']-1)*$output['pageSize']; //从哪一条记录开始读取
$count = $output['pageSize']; //一次最多读取的条数
$sql = "SELECT * FROM jd_order WHERE userId=$uid LIMIT $start, $count";
$result = mysqli_query($conn, $sql);
$orderList = mysqli_fetch_all($result, MYSQLI_ASSOC);

//遍历每个订单，查询该订单所购买的产品信息
foreach($orderList as $i=>$order){
    $oid = $order['oid'];   //订单编号
    $sql = "SELECT * FROM jd_product WHERE pid IN (SELECT productId FROM jd_order_detail WHERE orderId=$oid)";//根据订单编号查询产品编号，再查询产品信息
    $result = mysqli_query($conn,$sql);
    $productList = mysqli_fetch_all($result, MYSQLI_ASSOC);
    $orderList[$i]['productList'] = $productList;
}
//把查询到数据保存入输出数组！！！！
$output['data'] = $orderList;


echo json_encode($output);