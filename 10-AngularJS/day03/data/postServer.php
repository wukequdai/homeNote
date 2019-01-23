<?php

header("Content-Type:application/json");

$name = $_REQUEST['name'];

$stuArray = [];

$stuArray[] = [
'welcomeInfo'=>'欢迎登陆'.$name
];

echo json_encode($stuArray);

?>