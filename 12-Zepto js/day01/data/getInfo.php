<?php
header("Content-Type:application/json");

@$name = $_REQUEST['name'];

$array=[];

$array[] = [
'name'=>$name,
'class'=>'class1'
];

echo json_encode($array);


?>