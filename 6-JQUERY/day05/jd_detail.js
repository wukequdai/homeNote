//顶部下拉菜单,添加hover行为
$(".app_jd,.service").hover(function(){
  //切换子菜单的显示隐藏
  $(this).children("[id$='_items']").toggle()
         //切换前面a元素的hover class 留住hover状态
         .prev().toggleClass("hover");
})
//全部商品分类菜单
//为一级菜单添加hover
$("#category").hover(function(){
  $("#cate_box").toggle();//切换子菜单显示隐藏
})
//为子菜单添加事件委托，只允许li触发事件
$("#cate_box").on("mouseenter","li",showSub)
              .on("mouseleave","li",showSub);
//定义函数showSub,切换二级菜单的显示和隐藏
function showSub(){//this->li
  $(this).children(".sub_cate_box").toggle()
          //切换前面h3的hover class，留住hover
         .prev().toggleClass("hover");
}
//标签切换
$("#product_detail>.main_tabs")
  .on("click","li:not(.current)",function(){
    //this->li
    //标签的切换
    $(this).addClass("current")
           .siblings().removeClass("current");
    //内容的切换
    //隐藏所有容器
    var $divs=$("#product_detail>[id^='product']");
    $divs.removeClass("show")
    //如果不是商品评价
    if(!$(this).is(":contains('商品评价')")){
      var i=//获得当前li的下标
        $(this).index("#product_detail>.main_tabs>li:not(:contains('商品评价'))");
      //为所有div中相同下标位置的div添加show显示
      $divs.eq(i).addClass("show");
    }
  }
)
//放大镜
var preview={
  LIWIDTH:62,//每个li的宽
  $ul:null,//保存小图片列表的ul
  moved:0,//保存已经左移了的li个数
  $mask:null,//保存半透明遮罩
  MSIZE:175,//保存mask的大小
  SMSIZE:350,//保存superMask的大小
  MAX:0,//保存mask可用的最大top和left
  $lg:null,//保存largeDiv
  init(){//初始化功能
    this.MAX=this.SMSIZE-this.MSIZE;
    //按id为icon_list查找ul保存到$ul中
    this.$ul=$("#icon_list");
    //为两个a绑定单击事件
    $("#preview>h1>a").click(function(e){
      //a的class不以_disabled结尾
      if(!$(e.target).is("[class$='_disabled']")){
        //如果a是forward
        if($(e.target).is(".forward")){
          //让ul的left-LIWIDTH
          this.$ul.css("left",
            parseFloat(this.$ul.css("left"))
            -this.LIWIDTH  
          );
          this.moved++;
        }else{
          //让ul的left-LIWIDTH
          this.$ul.css("left",
            parseFloat(this.$ul.css("left"))
            +this.LIWIDTH  
          );
          this.moved--;
        }
        
        this.checkA();//检查a的状态
      }
    }.bind(this));
    //为$ul添加鼠标进入事件委托,只允许li下的img响应事件
    this.$ul.on("mouseover","li>img",function(){
      //获得当前img的src
      var src=$(this).attr("src");
      //查找旧src中最后一个.的位置
      var i=src.lastIndexOf(".");
      //拼接.前的字符串+"-m"+.之后的剩余字符串
      src=src.slice(0,i)+"-m"+src.slice(i);
      //设置id为mImg的src为新的src
      $("#mImg").attr("src",src);
    });
    //选择id为mask的半透明遮罩保存在$mask中
    this.$mask=$("#mask");
    //选择id为largeDiv的半透明遮罩
    this.$lg=$("#largeDiv");
    //为id为superMask绑定hover
    $("#superMask")
      .hover(function(){
        //切换id为mask的显示隐藏
        this.$mask.toggle();
        this.$lg.toggle();
        //获得mImg的src
        var src=$("#mImg").attr("src");
        //获得最后一个.的位置
        var i=src.lastIndexOf(".");
        //去掉.前的m，换成l
        src=src.slice(0,i-1)+"l"+src.slice(i);
        this.$lg.css(//这是$lg的背景图片为src
          "backgroundImage","url("+src+")");
        //强调: html中路径分隔符必须用/，不能用\
      }.bind(this))
      //继续绑定鼠标移动事件
      .mousemove(function(e){
        //获得鼠标相对于superMask的x,y坐标
        var x=e.offsetX, y=e.offsetY;
        //用x,y坐标-1/2mask大小,算出top和left
        var top=y-this.MSIZE/2,
            left=x-this.MSIZE/2;
        //如果top<0，就改回0
        if(top<0) top=0;
        //否则，如果top>MAX,就改回MAX
        else if(top>this.MAX) top=this.MAX;
        //如果left<0, 就改回0
        if(left<0) left=0;
        //否则，如果left>MAX，就改回MAX
        else if(left>this.MAX) left=this.MAX;
        //设置mask的top和left值
        this.$mask.css({top,left});
                      //"top":top,"left":left
        //修改$lg的背景位置为-16/7倍的left和top
        this.$lg.css(
          "backgroundPosition",
          `${-16/7*left}px ${-16/7*top}px`
        );
      }.bind(this));
  },
  checkA(){//每次移动后，检查两个a的状态
    if(this.moved==0)//如果moved==0
      //禁用backward
      $("[class^='backward']")
        .attr("class","backward_disabled")
    //否则,如果LI的个数-moved==5
    else if(
      this.$ul.children().size()-this.moved==5)
      //禁用forward
      $("[class^='forward']")
        .attr("class","forward_disabled")
    else{//否则,两个都启用!
      $("[class^='backward']")
        .attr("class","backward");
      $("[class^='forward']")
        .attr("class","forward");
    }
  }
}
preview.init();

