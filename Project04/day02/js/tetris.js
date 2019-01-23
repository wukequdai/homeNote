var game={
	CSIZE:26, //每个格子大小
	OFFSET:15, //格子距离边框的偏移量
	pg:null, //保存游戏容器元素
	shape:null, //保存正在下落的主角图形
	nextShape:null,//保存备胎图形
	timer:null,//保存定时器序号
	interval:200,//下落的时间间隔
	RN:20, CN:10, //保存总行数和总列数
	wall:null,
	score:0,//游戏得分
	lines:0,//删除的总行数
	SCORES:[0,10,30,60,100],
		    //0  1  2  3  4
	state:1,//游戏状态
	GAMEOVER:0,
	RUNNING:1,
	PAUSE:2,
	start:function(){
		this.state=this.RUNNING;//初始化游戏状态为running
		this.score=0; this.lines=0;//重置score和lines属性为0
		this.wall=[];//初始化wall为空数组
		for(var r=0;r<this.RN;r++){//r从0开始，到<RN结束
			//设置wall的r位置为CN个空元素的数组
			this.wall[r]=new Array(this.CN);
		}
		//找到class为playground的div,保存在pg属性中
		this.pg=document.querySelector(".playground");
		//随机生成一个图形保存到shape中
		this.shape=this.randomShape();
		//随机生成一个图形保存到nextShape中
		this.nextShape=this.randomShape();
		this.paint();//绘制主角图形
		//启动周期性定时器，设置任务函数为moveDown, 时间间隔为interval
		this.timer=setInterval(
			this.moveDown.bind(this),this.interval
		);
		//为document绑定键盘按下事件为:
		document.onkeydown=function(e){
			switch(e.keyCode){//判断按键号
				case 32: //是空格: 调用hardDrop
					this.state==this.RUNNING&&this.hardDrop();
					break;
				case 37: //是左: 调动moveLeft
					this.state==this.RUNNING&&this.moveLeft(); break;
				case 38: //是上: 顺时针旋转
					this.state==this.RUNNING&&this.rotateR(); break;
				case 90: //是Z: 逆时针旋转
					this.state==this.RUNNING&&this.rotateL(); break;
				case 39: //是右: 调用moveRight
					this.state==this.RUNNING&&this.moveRight(); break;
				case 40: //是下: 调用moveDown
					this.state==this.RUNNING&&this.moveDown(); break;
				case 83: //是S: 调用start方法
					this.state==this.GAMEOVER&&this.start(); break;
				case 81: //是Q: 调用quit方法
					this.state!=this.GAMEOVER&&this.quit(); break;
				case 80: //是P: 调用pause方法
					this.state==this.RUNNING&&this.pause(); break;
				case 67: //是C: 调用myContinue方法
					this.state==this.PAUSE&&this.myContinue(); break;
			}
		}.bind(this)//提前绑定this
	},
	myContinue:function(){
		this.state=this.RUNNING;//修改state为RUNNING
		this.timer=setInterval(//启动定时器
			this.moveDown.bind(this),this.interval
		);
		this.paint();//重绘一切
	},
	pause:function(){
		//修改state为PAUSE,停止定时器,清空timer,重绘一切
		this.state=this.PAUSE;
		clearInterval(this.timer);
		this.timer=null;
		this.paint();
	},
	quit:function(){
		//修改state为GAMEOVER,停止定时器,清空timer,重绘一切
		this.state=this.GAMEOVER;
		clearInterval(this.timer);
		this.timer=null;
		this.paint();
	},
	canRotate:function(){
		//遍历shape中每个cell
		for(var i=0;i<this.shape.cells.length;i++){
			//将cell临时保存在cell中
			var cell=this.shape.cells[i];
			//如果cell的r>=RN,或r<0,或c>=CN,或c<0
			if(cell.r>=this.RN||cell.r<0
					||cell.c>=this.CN||cell.c<0)
				return false;//返回false
			//否则,如果wall中和当前cell相同位置有格
			else if(this.wall[cell.r][cell.c])
				return false;//返回false
		}//(遍历结束)
		return true;//返回true
	},
	rotateR:function(){
		this.shape.rotateR();
		if(!this.canRotate())//如果不能旋转
			this.shape.rotateL();
	},
	rotateL:function(){
		this.shape.rotateL();
		if(!this.canRotate())//如果不能旋转
			this.shape.rotateR();
	},	
	hardDrop:function(){//一落到底
		//反复: 只要可以下落
		while(this.canDown())
			this.moveDown();//调用moveDown方法
	},
	canLeft:function(){//能否左移
		//遍历shape中每个cell
		for(var i=0;i<this.shape.cells.length;i++){
			//将cell临时保存在cell中
			var cell=this.shape.cells[i];
			//如果cell的c是0，返回false
			if(cell.c==0) return false;
			//否则，如果wall中cell左侧有格，返回false
			else if(this.wall[cell.r][cell.c-1]) return false;
		}//(遍历结束)
		return true;//返回true
	},
	moveLeft:function(){//左移
		if(this.canLeft()){//如果可以左移:
			this.shape.moveLeft();//调用shape的moveLeft
			this.paint();//重绘一切
		}
	},
	canRight:function(){//能否右移
		//遍历shape中每个cell
		for(var i=0;i<this.shape.cells.length;i++){
			//将cell临时保存在cell中
			var cell=this.shape.cells[i];
			//如果cell的c是CN-1，返回false
			if(cell.c==this.CN-1) return false;
			//否则，如果wall中cell右侧有格，返回false
			else if(this.wall[cell.r][cell.c+1]) return false;
		}//(遍历结束)
		return true;//返回true
	},
	moveRight:function(){//右移
		if(this.canRight()){//如果可以右移
			this.shape.moveRight();//调用shape的moveRight
			this.paint();//重绘一切
		}
	},
	canDown:function(){//检查是否可继续下落
		//遍历shape中每个cell
		for(var i=0;i<this.shape.cells.length;i++){
			//将当前cell临时存为cell
			var cell=this.shape.cells[i];
			//如果cell的r等于RN-1
			if(cell.r==this.RN-1) return false;
			//否则，如果wall中和cell相同位置的下方不是undefined
			else if(this.wall[cell.r+1][cell.c]) 
				return false;//返回false
		}//(遍历结束)
		return true;//返回true
	},
	landIntoWall:function(){//将shape中的格落入墙中
		//遍历shape中每个cell
		for(var i=0;i<this.shape.cells.length;i++){
			//将当前cell临时保存在cell中
			var cell=this.shape.cells[i];
			//设置wall中cell相同r，相同c的位置为cell
			this.wall[cell.r][cell.c]=cell;
		}
	},
	moveDown:function(){
		if(this.canDown()){//如果可以下落
			//调用shape的moveDown方法
			this.shape.moveDown();	
		}else{//否则
			this.landIntoWall();//将shape中的格落入墙中
			var ln=this.deleteRows();//删除行
			this.lines+=ln;//将ln累加到lines上
			//在SCORES数组中获得ln行对应的分值累加到score上
			this.score+=this.SCORES[ln];
			if(!this.isGAMEOVER()){//如果游戏没结束
				this.shape=this.nextShape;//将备胎转正
				this.nextShape=this.randomShape();//生成新的备胎
			}else{//否则	
				//修改游戏状态为GAMEOVER
				this.state=this.GAMEOVER;
				clearInterval(this.timer);//停止定时器
				this.timer=null;
			}
		}
		this.paint();//重绘主角图形
	},
	isGAMEOVER:function(){//判断游戏是否结束
		//遍历nextShape中每个cell
		for(var i=0;i<this.nextShape.cells.length;i++){
			//将当前cell临时保存在cell中
			var cell=this.nextShape.cells[i];
			//如果wall中和cell相同位置有格，就返回true
			if(this.wall[cell.r][cell.c]) return true;
		}//(遍历结束)返回false
		return false;
	},
	paintState:function(){//负责根据游戏的状态绘制状态图片
		if(this.state==this.GAMEOVER){//如果state为GAMEOVER
			var img=new Image();//创建img
			//设置img的src为img/game-over.png
			img.src="img/game-over.png";
			img.className="state";
			this.pg.appendChild(img);//将img追加到pg中
		}else if(this.state==this.PAUSE){
			//否则,如果state为PAUSE
			var img=new Image();//创建img
			//设置img的src为img/pause.png
			img.src="img/pause.png";
			img.className="state";
			this.pg.appendChild(img);//将img追加到pg中
		}
	},
	paintScore:function(){//重绘分数
		//找到id为score的span，设置其内容为score属性
		document.getElementById("score").innerHTML=
																					this.score;
		//找到id为lines的span，设置其内容为lines属性
		document.getElementById("lines").innerHTML=
																					this.lines;
	},
	deleteRows:function(){//判断并删除所有满格行
		//自底向上遍历wall中每一行,同时声明变量ln=0
		for(var r=this.RN-1,ln=0;r>=0;r--){
			//如果wall中r行是满格行
			if(this.isFullRow(r)){
				this.deleteRow(r);//删除第r行
				ln++;//ln+1
				//如果wall中r-1行是空或ln等于4,就退出循环
				if(this.wall[r-1].join("")==""||ln==4){
					break;
				}
				r++;//r留在原地
			}
		}//(遍历结束)
		return ln;//返回ln
	},
	isFullRow:function(r){//判断r行是否满格行
		//如果wall中r行转为字符串后，找不到开头,或,,或,结尾
			//返回true
		//否则, 返回false
		return String(this.wall[r]).search(/^,|,,|,$/)==-1;
	},
	deleteRow:function(r){//删除第r行
		//从r开始反向遍历wall中每一行
		for(;r>=0;r--){
			//将wall中r-1行替换到r行
			this.wall[r]=this.wall[r-1];
			//将wall中r-1行置为CN个空元素的数组
			this.wall[r-1]=new Array(this.CN);
			for(var c=0;c<this.CN;c++){//遍历wall中r行每个格子
				//如果wall中当前位置有格,就修改wall中当前格的r+1
				if(this.wall[r][c]) this.wall[r][c].r++;
			}//(遍历结束)
			//如果wall中r-2行是空行, 就退出循环
			if(this.wall[r-2].join("")=="") break;
		}
	},
	randomShape:function(){//随机生成一个图形
		//0~2之间生成一个随机整数r
		var r=Math.floor(Math.random()*3);
		switch(r){//判断r
			case 0: return new O();//是0: return new O();
			case 1: return new I();//是1: return new I();
			case 2: return new T();//是2: return new T();
		}
	},
	paintNext:function(){//重绘备胎图形
		//创建文档片段frag
		var frag=document.createDocumentFragment();
		//遍历nextShape中每个cell
		for(var i=0;i<this.nextShape.cells.length;i++){
			var img=this.paintCell(this.nextShape.cells[i]);
			//获得img的left，+10*CSIZE，再保存回img的left
			img.style.left=
				parseFloat(img.style.left)+10*this.CSIZE+"px";
			//获得img的top, +CSIZE, 在保存回img的top
			img.style.top=
				parseFloat(img.style.top)+this.CSIZE+"px";

			//将当前cell临时保存在变量cell中
			frag.appendChild(img);//将img追加到frag中
		}//(遍历结束)
		this.pg.appendChild(frag);//将frag追加到pg中
	},
	paintWall:function(){//重绘墙
		//创建文档片段frag
		var frag=document.createDocumentFragment();
		//自底向上遍历墙中每个格
		for(var r=this.RN-1;r>=0;r--){
			//如果wall中r行无缝拼接后是"",就退出循环
			if(this.wall[r].join("")=="") break;
			else//否则
				for(var c=0;c<this.CN;c++){
					//如果wall中当前元素有格
					if(this.wall[r][c])
						frag.appendChild(
							this.paintCell(this.wall[r][c])
						);
				}
		}//(遍历结束)
		this.pg.appendChild(frag);
	},
	paintCell:function(cell){//重绘一个格
		var img=new Image();//创建一个img元素
		//设置img的left为cell的c*CSIZE+OFFSET
		img.style.left=
			cell.c*this.CSIZE+this.OFFSET+"px";
		//设置img的top为cell的r*CSIZE+OFFSET
		img.style.top=
			cell.r*this.CSIZE+this.OFFSET+"px";
		img.src=cell.src;//设置img的src为cell的src
		return img;
	},
	paintShape:function(){//绘制主角图形
		//创建文档片段frag
		var frag=document.createDocumentFragment();
		//遍历shape中每个cell
		for(var i=0;i<this.shape.cells.length;i++){
			//将当前cell临时保存在变量cell中
			frag.appendChild(
				this.paintCell(this.shape.cells[i])
			);//将img追加到frag中
		}//(遍历结束)
		this.pg.appendChild(frag);//将frag追加到pg中
	},
	paint:function(){//重绘一切
		//删除pg的内容中所有img元素(<img 除>之外的任意字符任意个>)
		this.pg.innerHTML=
		 this.pg.innerHTML.replace(/<img\s[^>]*>/g,"");
		this.paintShape();//重绘主角图形
		this.paintWall();//重绘墙
		this.paintNext();//重绘备胎
		this.paintScore();//重绘分数
		this.paintState();//重绘游戏状态
	},
}
game.start();