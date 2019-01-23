//Worker线程：接消息 => 复杂运算 => 发消息
onmessage = function(e){
  console.log('Worker线程开始工作')
  var msg = e.data; //"123,789"
  var n1 = msg.split(',')[0];
  n1 = parseInt(n1);
  var n2 = msg.split(',')[1];
  n2 = parseInt(n2);

  var result = n1+n2; //此处假设是非常复杂的运算

  postMessage(result); //把处理结果传给UI主线程
}