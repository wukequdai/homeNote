<?php
 header("content-type:application/json;charset=utf-8");
 //1:获取参数uid  16:35--15:50 练习
 //               15:50--16:00 休息   
 $uid = $_REQUEST['uid'];
 //2:连接数据库设置编码
 require("init.php");
 //3:查询 依据uid查询购物车id
 //4:判断
 $sql = "SELECT cid FROM jd_cart WHERE userId=";
 $sql .= "$uid";
 $result = mysqli_query($conn,$sql);
 $row = mysqli_fetch_assoc($result);
 if($row != null){
 //5:多表查询
 //6:转二维数组
 //7:转json 响应发送  17:07--17:10
  $sql = " SELECT p.pid,p.pname,p.pic,p.price,";
  $sql .= " d.did,d.count";
  $sql .= " FROM jd_product p,jd_cart_detail d";
  $sql .= " WHERE d.productId = p.pid";
  $sql .= " AND   d.cartId = $row[cid]";
  $result = mysqli_query($conn,$sql);
  $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
  echo json_encode($rows);
 }