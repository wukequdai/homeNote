		var span=document.getElementById("time");
		function calc(){
			//获得当前时间now
			var now=new Date();
			//定义目标时间
			var end=new Date("2017/6/20 14:55");
			if(end-now>=0){
				//用目标时间-当前时间=时间差
				var s=Math.floor((end-now)/1000);
				var d=Math.floor(s/3600/24);//计算d
				var h=Math.floor(s%(3600*24)/3600);//计算h
				var m=Math.floor(s%3600/60);//计算m
				s%=60;//计算s
				span.innerHTML=d+"天"+h+"小时"+m+"分"+s+"秒";
			}else{
				clearInterval(timer); timer=null;
				span.innerHTML="周末愉快！"
			}
		}
		calc();
		var timer=setInterval(calc,1000);
		var btn=document.getElementsByTagName("button")[0];
			btn.onclick=function(){
				if(timer!=null){
					clearInterval(timer); timer=null;
					this.innerHTML="▷";
				}else{
					timer=setInterval(calc,1000);
					this.innerHTML="||";
				}
			};
