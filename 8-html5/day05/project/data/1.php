<?php
/**
*向客户端输出JSON数据
*/
header('Content-Type: application/json');

$data = [
  ['label'=>'HTML','value'=>3],
  ['label'=>'CSS','value'=>5],
  ['label'=>'JS','value'=>7],
  ['label'=>'DOM','value'=>6],
  ['label'=>'AJAX','value'=>8],
  ['label'=>'H5','value'=>6]
];

echo json_encode($data);