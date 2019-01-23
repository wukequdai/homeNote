<?php
//a:修改响应头 json		
header("content-type:application/json;charset=utf-8");
//b:获取参数   uid/pid
$uid = $_REQUEST['uid']; 
$pid = $_REQUEST['pid'];  
//?????判断查看结果
require("init.php");
//c:根据用户编号查询他对应的购物车编号
//SELECT cid FROM jd_cart
//WHERE userId=$uid
$sql = "SELECT cid FROM jd_cart";
$sql .= " WHERE userId=$uid";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
if($row===NULL){
//d:新用户没有查询到购物车编号 null
//e:如果用户没有购物车，则添加一个购物车
//获取购物车编号
//INSERT INTO jd_cart values(null,$userId);
//$cartId = mysqli_insert_id($conn);
$sql = "INSERT INTO jd_cart VALUES(null,$uid)";
mysqli_query($conn,$sql);
$cartId = mysqli_insert_id($conn);
}else{
//如果查询到了购物车id赋
$cartId = $row['cid'];
}
//f:查询购物车明细表,
//对应购物车编号+产品编号是否存在.
//SELECT did,count FROM jd_cart_detail
//WHERE cartId=$cid AND productId=$pid
$sql = "SELECT did,count FROM jd_cart_detail";
$sql .=" WHERE cartId=$cartId  AND ";
$sql .=" productId=$pid";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
if($row===null){
//g:指定购物明细表中没有该商品
//若之前未购买过商品，则插入一条购物记录
//购买数量为
//INSERT INTO jd_cart_detail
//VALUES(null,$cid,$pid,1);
$sql = "INSERT INTO jd_cart_detail VALUES";
$sql .= "(NULL,$cartId,$pid,1)";
mysqli_query($conn,$sql);
}else{
//f:指定购物国情中买过该商品
//UPDATE jd_cart_detail
//SET count = count+1 WHERE did=$did;
 $did = $row['did'];
 $count = $row['count'];
 $count++;
 $sql = "UPDATE jd_cart_detail SET ";
 $sql .= " count=$count";
 $sql .= " WHERE did=$did";
 mysqli_query($conn,$sql);
}
echo '{"msg":"购买成功"}';