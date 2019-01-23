<?php
/**
*向客户端输出6个部门的销售统计请求，以JSON格式
*/
header('Content-Type: application/json');

$data = [
  ['label'=>'部门1', 'value'=>350],
  ['label'=>'部门2', 'value'=>300],
  ['label'=>'部门3', 'value'=>480],
  ['label'=>'部门4', 'value'=>200],
  ['label'=>'部门5', 'value'=>450],
  ['label'=>'部门6', 'value'=>380]
];

echo json_encode($data);
