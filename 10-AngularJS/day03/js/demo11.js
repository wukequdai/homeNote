/**
 * Created by bjwsl-001 on 2017/3/7.
 */

var app = angular.module('myApp', ['ng']);

app.service('$print',function(){
  this.print = function(){
    console.log('Hello 行内式依赖注入');
  }
})

//推断式
/*app.controller('myCtrl', function ($scope,$print) {

  $print.print();

})*/

//行内式依赖注入
app.controller('myCtrl', ["$scope","$print",
    function($scope,$print){
      $print.print();
    }]);









