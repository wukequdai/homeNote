<?php

header("Content-Type:application/json");

$stuArray = [];

$stuArray[] = [
'name'=>'Lucy',
'age'=>20
];

$stuArray[] = [
'name'=>'Lily',
'age'=>25
];

$stuArray[] = [
'name'=>'Bruis',
'age'=>22
];

echo json_encode($stuArray);

?>