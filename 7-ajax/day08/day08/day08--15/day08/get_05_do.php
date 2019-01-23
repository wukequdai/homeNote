<?php
//json 
header("content-type:application/json;charset=utf-8");
$rows = [
   ["name"=>"tom1","age"=>19],
   ["name"=>"tom2","age"=>18]
];
$str = json_encode($rows);
echo $str;
?>