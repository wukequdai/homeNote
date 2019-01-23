+function(){
	var pop=document.getElementById("pop");
	pop.addEventListener("click",function(){
		alert("约么?");
	});
	var SIZE=parseFloat(//获得div pop的大小
		getComputedStyle(pop).width
	);
	//计算最大top和left
	var MAXLEFT=innerWidth-SIZE;
	var MAXTOP=innerHeight-SIZE;
	//为pop随机生成新位置: left, top
	var left=Math.floor(Math.random()*(MAXLEFT+1));
	var top=Math.floor(Math.random()*(MAXTOP+1));
	//设置pop到新位置
	pop.style.left=left+"px";
	pop.style.top=top+"px";
	//为pop绑定mouseover
	pop.addEventListener("mouseover",function(e){
		while(true){//反复: 
			//为pop随机生成新位置: left, top
			var left=Math.floor(Math.random()*(MAXLEFT+1));
			var top=Math.floor(Math.random()*(MAXTOP+1));
			//获得鼠标相对于文档显示区的x,y坐标
			var x=e.clientX, y=e.clientY;
			//如果新位置不包含鼠标位置
			if(!(x>=left&&x<=left+SIZE
						&&y>=top&&y<=top+SIZE)){
				//设置pop到新位置
				pop.style.left=left+"px";
				pop.style.top=top+"px";
				break;//退出循环
			}
		}
	});
}();