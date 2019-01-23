/**
 * Created by bjwsl-001 on 2017/3/7.
 */
var app = angular.module('myApp', ['ng']);

app.service('$add',["$location",function($location){

  this.calSum = function(num1,num2){
    console.log($location.port());
    return (num1+num2);
  }
}])

//推断式
/*app.controller('myCtrl', function ($add,$scope) {
  $scope.sum = function () {
    $scope.result =
      $add.calSum($scope.num1,$scope.num2);
  }
})*/

//行内式依赖注入
app.controller('myCtrl',["$add","$scope",
  function($add,$scope){
    $scope.sum = function () {
      $scope.result =
        $add.calSum($scope.num1,$scope.num2);
    }
  }]);











