var game={
	CSIZE:26, //每个格子大小
	OFFSET:15, //格子距离边框的偏移量
	pg:null, //保存游戏容器元素
	shape:null, //保存正在下落的主角图形
	timer:null,//保存定时器序号
	interval:200,//下落的时间间隔
	RN:20, CN:10, //保存总行数和总列数
	wall:null,
	start:function(){
		//初始化wall为空数组
		//r从0开始，到<RN结束
			//设置wall的r位置为CN个空元素的数组
		//找到class为playground的div,保存在pg属性中
		this.pg=document.querySelector(".playground");
		//创建一个T类型的图形对象,保存在shape属性中
		this.shape=new I();
		this.paint();//绘制主角图形
		//启动周期性定时器，设置任务函数为moveDown, 时间间隔为interval
		this.timer=setInterval(
			this.moveDown.bind(this),this.interval
		);
	},
	canDown:function(){//检查是否可继续下落
		//遍历shape中每个cell
			//将当前cell临时存为cell
			//如果cell的r等于RN-1
				//返回false
			//否则，如果wall中和cell相同位置的下方不是undefined
				//返回false
		//(遍历结束)
		//返回true
	},
	landIntoWall:function(){//将shape中的格落入墙中
		//遍历shape中每个cell
			//将当前cell临时保存在cell中
			//设置wall中cell相同r，相同c的位置为cell
	},
	moveDown:function(){
		//如果可以下落
			//调用shape的moveDown方法
			this.shape.moveDown();
			this.paint();//重绘主角图形
		//否则
			//将shape中的格落入墙中
			//创建一个T图形保存在shape中
	},
	paint:function(){//重绘一切
		//删除pg的内容中所有img元素(<img 除>之外的任意字符任意个>)
		this.pg.innerHTML=
		 this.pg.innerHTML.replace(/<img\s[^>]*>/g,"");
		this.paintShape();//重绘主角图形
	},
	paintShape:function(){//绘制主角图形
		//创建文档片段frag
		var frag=document.createDocumentFragment();
		//遍历shape中每个cell
		for(var i=0;i<this.shape.cells.length;i++){
			//将当前cell临时保存在变量cell中
			var cell=this.shape.cells[i];
			var img=new Image();//创建一个img元素
			//设置img的left为cell的c*CSIZE+OFFSET
			img.style.left=
				cell.c*this.CSIZE+this.OFFSET+"px";
			//设置img的top为cell的r*CSIZE+OFFSET
			img.style.top=
				cell.r*this.CSIZE+this.OFFSET+"px";
			img.src=cell.src;//设置img的src为cell的src
			frag.appendChild(img);//将img追加到frag中
		}//(遍历结束)
		this.pg.appendChild(frag);//将frag追加到pg中
	}
}
game.start();