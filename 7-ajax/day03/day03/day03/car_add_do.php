<?php
//获取参数: 
@$cname = $_REQUEST['cname'] or die('cname required');
@$pic = $_REQUEST['pic'] or die('pic required');
@$price = $_REQUEST['price'] or die('price required');
@$birthday = $_REQUEST['birthday'] or die('birthday required');
@$isonsale = $_REQUEST['isonsale'] or die('isonsale required');

var_dump($_REQUEST);

//连接mysql数据库
//设置编码
//创建添加汽车sql
//执行sql
//判断操作
//如果添加成功显示 该记录数据库编号

?>