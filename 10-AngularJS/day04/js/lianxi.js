/**
 * Created by bjwsl-001 on 2017/3/8.
 */

var app = angular.module('myApp',['ng']);

//创建一个服务
app.service('$heartBeat', ["$interval",
  function ($interval) {
    this.startBeat = function(){

      promise = $interval(function () {
        console.log('start beat');
      },500);
    };
    this.stopBeat = function () {
      console.log('stop beat');
      $interval.cancel(promise);
    };
  }]);

app.controller('myCtrl',["$scope","$heartBeat",
  function($scope,$heartBeat){

    $scope.funcStart = function () {
      $heartBeat.startBeat();
    }

    $scope.funcStop = function () {
      $heartBeat.stopBeat();
    }

  }]);