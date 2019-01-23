/**
 * Created by bjwsl-001 on 2017/3/7.
 */

var app = angular.module('myApp', ['ng']);

//创建一个$show的服务
app.factory('$show',function(){
  return {
    showAlert:function(){
      alert('$show service method is called');
    }
  }
})

//推断式依赖注入
/*app.controller('myCtrl', function ($scope,$show) {

  $scope.funcClick = function(){
    $show.showAlert();
  }

})*/

//标记式依赖注入
var func = function ($scope,$show) {
  $scope.funcClick = function(){
    $show.showAlert();
  }
};
//打标记
func.$inject = ["$scope","$show"];

app.controller('myCtrl',func )









