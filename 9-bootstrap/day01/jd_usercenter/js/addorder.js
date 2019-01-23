/**功能点1：检查当前用户是否登录，未登录则跳转回登录页**/
if(!sessionStorage['LoginUid']){
  location.href="productlist.html";
}

/**功能点2：异步请求页头和页尾**/
$('#header').load('data/header.php',function(){
  $('#welcome').html('欢迎回来：'+sessionStorage['LoginUname']);
});
$('#footer').load('data/footer.php');

/**功能点3：异步请求当前登录用户的购物车信息**/
$.ajax({
  url: 'data/6_cart_detail_list.php',
  data: {uid: sessionStorage['LoginUid']},
  success: function(list){
    console.log('请求购物车详情成功')
    console.log(list);
    //var html = '';
    var sum = 0;  //购物车总金额
    for(var i=0; i<list.length; i++){
      var p = list[i];
      sum += p.price*p.count;
    }
    //$('.goods-items').html(html);
    $('.price-num').html('￥'+sum); //显示购物车总金额
    $('[name="price"]').val(sum);
  },
  error: function(){
    alert('请求购物车详情失败！')
  }
});


/**功能点4：为“支付方式”下面的li做事件绑定**/
$('.payment-list').on('click', 'li', function(){
  //修改payment-item-selected的位置
  $(this).addClass('payment-item-selected').siblings('.payment-item-selected').removeClass('payment-item-selected');

  //根据当前li的data-value值修改隐藏域的value
  //var v = $(this).attr('data-value');
  var v = $(this).data('value');
  $(this).siblings('[name="payment"]').val(v);
})


/**功能点5：为“提交订单”按钮绑定监听**/
$('.checkout-submit').click(function () {
  //收集所有的用户输入，组成 k=v&k=v 的形式 —— 表单序列化
  var data = $('#form-addorder').serialize();
  data += '&uid='+sessionStorage['LoginUid'];
  //console.log(data);
  $.ajax({
    type: 'POST',
    url: 'data/9_addorder.php',
    data: data,
    success: function(result){
      if(result.code===200){//下单成功
        //跳转到addorder_succ.html，显示出订单号
        sessionStorage['OrderId'] = result.orderId;
        location.href = "addorder_succ.html";;
      }else {  //下单失败
        alert('下单失败！错误原因为：'+result.msg);
      }
    },
    error: function(){
      alert('提交订单异步请求失败！')
    }
  });
});







