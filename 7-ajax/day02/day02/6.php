<?php
//注意array类型与js数组不同

//声明一个数组
//php 5.3
$arr1 = array(20,40,60);
echo $arr1[0].'<br/>';
echo $arr1[1].'<br/>';
echo $arr1[2].'<br/>';

//php 5.4+
$arr2 = [10,30,50];
echo $arr2[0].'<br/>';
echo $arr2[1].'<br/>';
echo $arr2[2].'<br/>';

//var_dump($arr2);
//数组的两种类型
//1:索引数组(Indexed Array) 下标为连续的整数
//2:关联数组(Association Array) 下标为指定的字符串

$arr1 = [10,"tom",5000,true,[50,80]];
//$arr1[2] = "万寿路";
//var_dump($arr1);
//##向数组的尾部添加新元素
//$arr1[5] = "万寿路西街";
//print_r($arr1);
$arr1[count($arr1)] = '万寿路西街';
//var_dump($arr1);
//1:count计算数组元素个数
//echo count($arr1);
//2:向数组末尾添加元素
//$arr1[] = true;
//var_dump($arr1);
//练习:   11:40--11:45
//1:创建数组整型
//2:对数组进行求和运算并且输出结果
//3:向数组末尾添加二个元素 100 1000

$arr1 = [10,20,30,40,50];
//var_dump($arr1);
$sum = 0;
for($i=0;$i<count($arr1);$i++){
	$sum += $arr1[$i];
}
//echo $sum;
$arr1[] = 100;
$arr1[] = 1000;
var_dump($arr1);






?>