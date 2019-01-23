+function(){
	var $elev=$("#elevator");
	//查找.floor下的header下的span
	var $spans=$(".floor>header>span");
	//为window绑定scroll事件
	$(window).scroll(function(){
		var scrollTop=$("body").scrollTop();
		//检查每个span的位置，点亮
		$spans.each(function(i){
			//this->当前span->$(this)
			var $span=$(this);
			//如果蓝线<=绿线+红线
			if($span.offset().top
					<=scrollTop+innerHeight/2){
				$spans.removeClass("hover");//关闭所有灯
				$span.addClass("hover");//设置$span为hover
			}else{//否则
				$span.removeClass("hover")//移除$span的hover
			}
		});
		//如果第一个$spans中第一个span的蓝线<=绿线+红线
		if($spans.first().offset().top
				<=scrollTop+innerHeight/2)
			$elev.fadeIn(500);//设置$ulElev显示
		else//否则
			$elev.fadeOut(500);//设置$ulElev隐藏
		//获得.floor>header>span中class为hover的span的下标
		var i=$(".floor>header>span.hover")
						.index(".floor>header>span");
		//获得$elev下所有a,设置偶数位置的a显示，设置下一个兄弟隐藏
		$elev.find("a:even").show().next().hide();
		//获得$elev下第i个li的第一个a,设置其隐藏, 设置第一个a的下一个兄弟显示
		$elev.find("li:eq("+i+")>a:first").hide()
			   .next().show();
	});
	//为$elev下的ul添加鼠标进入事件委托,只允许li触发
	$elev.children("ul")
				.on("mouseover","li",function(){
		//this->li->$(this)->$li
		//设置$li下第一个a隐藏，第二个a显示
		$(this).children("a:first").hide()
						.next().show();
	}).on("mouseout","li",function(){
		var $li=$(this)//this->li->$(this)->$li
		//获得当前$li的位置
		var i=$elev.find("li").index($li);
		//如果和$li对应的span不是hover的
		if(!$spans.eq(i).is(".hover"))
			//设置$li下第一个a显示，第二个a隐藏
			$li.children("a:first").show()
					 .next().hide();
	})
}()