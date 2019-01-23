<?php
/*
*接收客户端提交的订单信息（rcvName, rcvAddr, rvcPhone, price, payment，userId），插入到订单表中，得到自增的订单编号，读取该用户购物车中的内容，插入到订单详情表中，并从购物车中删除该记录，最后返回：{"code":200, "orderId": 91305072}型的JSON数据。
*/
header('Content-Type: application/json');

@$rn = $_REQUEST['rcvName'] or die('{"code":401,"msg":"rcvName required"}');
@$ra = $_REQUEST['rcvAddr'] or die('{"code":402,"msg":"rcvAddr required"}');
@$rp = $_REQUEST['rcvPhone'] or die('{"code":403,"msg":"rcvPhone required"}');
@$pr = $_REQUEST['price'] or die('{"code":404,"msg":"price required"}');
@$pm = $_REQUEST['payment'] or die('{"code":405,"msg":"payment required"}');
@$uid = $_REQUEST['uid'] or die('{"code":406,"msg":"uid required"}');
$st = 1;  //新下的订单状态默认都是“等待付款"
$ot = time()*1000;//获得ＰＨＰ服务器的当前系统时间

require('1_init.php');

//SQL1: 添加新的订单记录，获得订单编号
$sql = "INSERT INTO jd_order VALUES(NULL,'$rn','$ra','$rp','$pr','$pm','$st','$ot','$uid')";
$result = mysqli_query($conn, $sql);
$orderId = mysqli_insert_id($conn); //订单编号

//SQL2：查询当前用户的购物车详情内容
$sql = "SELECT * FROM jd_cart_detail WHERE cartId=( SELECT cid FROM jd_cart WHERE userId=$uid )"; //嵌套查询——一条SELECT中嵌入另一个SELECT
$result = mysqli_query($conn,$sql);
$productList = mysqli_fetch_all($result, MYSQLI_ASSOC);  //当前用户购物车中的所有商品

foreach($productList as $p){
    //SQL3：把购物车内容插入到订单详情表
    $sql = "INSERT INTO jd_order_detail VALUES(NULL, $orderId, $p[productId], $p[count])";
    mysqli_query($conn,$sql);

    //SQL4：从购物车详情中删除已购买商品
    $sql = "DELETE FROM jd_cart_detail WHERE did=$p[did]";
    mysqli_query($conn,$sql);
}

echo '{"code":200, "orderId": '.$orderId.'}';

