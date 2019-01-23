//定义Cell类型: 3个属性: r,c,src
function Cell(r,c,src){
	this.r=r;
	this.c=c;
	this.src=src;
}
//定义Shape类型: 参数rcs和src
function Shape(rcs,src){
              //[r0,c0,r1,c1,r2,c2,r3,c3]
							//  0  1  2  3  4  5  6  7
  //为当前对象添加一个空数组属性cells
	this.cells=[];
	//i从0开始，到<4结束
	for(var i=0;i<4;i++){
		//创建一个cell类型的对象，同时设置cell的r为rcs[2*i]，c为rcs[2*i+1]，src为src
		//将cell类型的对象压入cells属性中
		this.cells.push(
			new Cell(rcs[2*i],rcs[2*i+1],src)
		);
	}
}
//为Shape类型的原型对象添加IMGS属性: 
Shape.prototype={
	IMGS:{T:"img/T.png",O:"img/O.png",I:"img/I.png"},
	moveDown:function(){//this->shape
		//遍历当前图形中每个cell
		for(var i=0;i<this.cells.length;i++){
			this.cells[i].r++;//将当前cell的r+1
		}
	},
	moveLeft:function(){
		//遍历当前图形中每个cell
		for(var i=0;i<this.cells.length;i++){
			this.cells[i].c--;	//将当前cell的c-1
		}
	},
	moveRight:function(){
		//遍历当前图形中每个cell
		for(var i=0;i<this.cells.length;i++){
			this.cells[i].c++;	//将当前cell的c+1
		}
	},
}
//定义T类型:
function T(){
	//借用父类型构造,传入数组[0,3,0,4,0,5,1,4],再传入路径当前对象的IMGS.T
	Shape.call(this,[0,3,0,4,0,5,1,4],this.IMGS.T);
}
//设置T类型的原型对象继承Shape的原型对象
Object.setPrototypeOf(
	T.prototype, Shape.prototype
);
function O(){//定义O类型:
	Shape.call(this,[0,4,0,5,1,4,1,5],this.IMGS.O);
}
Object.setPrototypeOf(
	O.prototype, Shape.prototype
);
function I(){//定义I类型: 
	Shape.call(this,[0,3,0,4,0,5,0,6],this.IMGS.I);
}
Object.setPrototypeOf(
	I.prototype, Shape.prototype
);

console.dir(new T());
/*
	cells:[
	  cell:{r:0, c:3, src: img/T.png},
		cell:{r:0, c:4, src: img/T.png},
		cell:{r:0, c:5, src: img/T.png},
		cell:{r:1, c:4, src: img/T.png},
	]
*/