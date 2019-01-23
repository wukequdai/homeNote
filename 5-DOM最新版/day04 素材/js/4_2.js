var sDiv=document.getElementById("s");
var mDiv=document.getElementById("m");
var hDiv=document.getElementById("h");
function rotate(){
	var now=new Date();//获得当前时间
	//分别获得时，分，秒
	var s=now.getSeconds();
	var m=now.getMinutes();
	var h=now.getHours();
	//分别计算时，分，秒对应的角度
	var sDeg=s*360/60;
	var mDeg=(m*360+s)/60;
	var hDeg=(h*3600+m*60+s)/(3600*12)*360;
	//分别修改sDiv..的旋转角度
	sDiv.style.transform="rotate("+sDeg+"deg)";
	mDiv.style.transform="rotate("+mDeg+"deg)";
	hDiv.style.transform="rotate("+hDeg+"deg)";
}
setInterval(rotate,1000)