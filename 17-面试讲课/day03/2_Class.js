/*class: 封装构造函数和原型对象的一种程序结构
* 原来的构造函数变为constructor(xxx)
* 原来添加到原型对象中的方法:
*   方法名(){...}
* 如何继承: extends 父类型名
*   //不用再设置原型对象间的继承关系
*   如何借用父类型构造: super();
*     super不用传入this
* */
class Flyer{
  constructor(name,speed){
    this.name=name;
    this.speed=speed;
  }
  fly(){
  //依然保存在Flyer构造函数的prototype中
    console.log(this.name+"以时速"+this.speed+"飞行");
  }
}
class Plane extends Flyer{
  constructor(name,speed,score){
    super(name,speed);
    this.score=score;
  }
  getScore(){
  //依然保存在Plane的prototype对象中
    console.log("击落"+this.name+"得"+this.score+"分");
  }
}

var f16=new Plane("F16",1000,20);
f16.fly();
f16.getScore();