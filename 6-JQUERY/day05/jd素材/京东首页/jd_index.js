/*广告图片数组*/
var imgs=[
	  "images/index/banner_01.jpg",
    "images/index/banner_02.jpg",
    "images/index/banner_03.jpg",
    "images/index/banner_04.jpg",
    "images/index/banner_05.jpg",
];

+function(){
	//获得id为slider的容器的宽作为每个li的宽
	var LIWIDTH=parseFloat($("#slider").css("width"));
	//保存id为imgs和id为indexs的ul
	var $ulImgs=$("#imgs"),$ulIdxs=$("#indexs");
	var n=0;//定义保存当前正在显示是图片下标
	var WAIT=2000;//等待时间
	var SPEED=500;//轮播速度
	var canAuto=true;//定义标记变量标记能否自动轮播
	+function(){//

		for(var i=0,htmlImgs="",htmlIdxs="";
				i<imgs.length;
				i++){
			htmlImgs+="<li><img src='"+imgs[i]+"'></li>";
			htmlIdxs+="<li>"+(i+1)+"</li>";
		}

		$ulImgs.html(htmlImgs);
		$ulIdxs.html(htmlIdxs);

		$ulImgs.css("width",LIWIDTH*(imgs.length+1));

		$ulImgs.append(
			$ulImgs.children(":first").clone()
		);

		$ulIdxs.children(":first").addClass("hover");
	}();
	function autoMove(){
		n++;
		$ulImgs.delay(WAIT).animate({
			left:-n*LIWIDTH
		},SPEED,function(){
			if(n==imgs.length){
				n=0;
				$ulImgs.css("left",0);
			}
			$ulIdxs.children(":eq("+n+")").addClass("hover")
						 .siblings().removeClass("hover");
			if(canAuto) autoMove();
		});
	};
	autoMove();
	$ulIdxs.on("mouseover","li",function(){
		$ulImgs.stop(true);
		n=$("#indexs>li").index(this);
		$ulImgs.animate({
			left:-n*LIWIDTH
		},SPEED,function(){
			$ulIdxs.children(":eq("+n+")").addClass("hover")
						 .siblings().removeClass("hover");
		});
	});
	$("#slider").mouseenter(function(){
		canAuto=false;
	}).mouseleave(function(){
		canAuto=true;
		n--;
		autoMove();
	})
}();

