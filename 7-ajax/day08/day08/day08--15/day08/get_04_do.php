<?php
//服务器响应xml
header("content-type:application/xml;charset=utf-8");
echo "<?xml version='1.0' encoding='utf-8' ?>";
echo "<books>";
echo "<book>";
echo "<name>javascript 大全</name>";
echo "</book>";
echo "</books>";
//乎略可以
?>