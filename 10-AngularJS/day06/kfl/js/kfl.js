/**
 * Created by bjwsl-001 on 2017/3/9.
 */

var app = angular.module('kfl_module',
  ['ng', 'ngRoute', 'ngAnimate']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/kfl_start', {
      templateUrl: 'tpl/start.html'
    })
    .when('/kfl_main', {
      templateUrl: 'tpl/main.html',
      controller: 'mainCtrl'
    })
    .when('/kfl_detail/:id', {
      templateUrl: 'tpl/detail.html',
      controller: 'detailCtrl'
    })
    .when('/kfl_order/:id', {
      templateUrl: 'tpl/order.html',
      controller: 'orderCtrl'
    })
    .when('/kfl_myorder', {
      templateUrl: 'tpl/myorder.html',
      controller: 'myorderCtrl'
    })
    .otherwise({redirectTo: '/kfl_start'})
})

app.controller('parentCtrl', ['$scope', '$location',
  function ($scope, $location) {

    $scope.jump = function (routePath) {
      $location.path(routePath);
    }
  }
])


app.controller('mainCtrl', ['$http', '$scope',
  function ($http, $scope) {

    $scope.hasMore = true;
    //console.log('mainCtrl func is called');
    $http
      .get('data/dish_getbypage.php')
      .success(function (data) {
        //console.log(data);
        $scope.dishList = data;
      })

    $scope.loadMore = function () {
      $http
        .get('data/dish_getbypage.php?start=' + $scope.dishList.length)
        .success(function (data) {
          console.log(data);
          if (data.length < 5) {
            $scope.hasMore = false;
          }
          $scope.dishList = $scope.dishList.concat(data);
          console.log($scope.dishList);

        })
    }

    $scope.$watch('kw', function () {
      console.log($scope.kw);
      if ($scope.kw) {
        $http
          .get('data/dish_getbykw.php?kw=' + $scope.kw)
          .success(function (data) {
            console.log(data);
            $scope.dishList = data;
          })
      }
    })

  }])

app.controller('detailCtrl', ['$scope', '$routeParams', '$http',
  function ($scope, $routeParams, $http) {

    console.log($routeParams.id);
    $http
      .get('data/dish_getbyid.php?id=' + $routeParams.id)
      .success(function (data) {
        console.log(data);
        $scope.dish = data[0];
      })
  }
])

app.controller('orderCtrl', ['$scope', '$http', '$routeParams',
  function ($scope, $http, $routeParams) {
    $scope.order = {did: $routeParams.id};

    $scope.submitOrder = function () {
      //console.log($scope.order);
      var result = $.param($scope.order);
      // console.log(result);
      $http
        .get('data/order_add.php?' + result)
        .success(function (data) {
          console.log(data);
          var resultObj = data[0];
          if (resultObj.msg == 'succ') {
            sessionStorage.setItem('phone',
              $scope.order.phone);
            $scope.result = "下单成功，订单编号为:" + resultObj.oid;
          }
          else {
            $scope.result = "下单失败";
          }
        })
    }
  }
])

app.controller('myorderCtrl', ['$scope', '$http',
  function ($scope, $http) {

    var phone = sessionStorage.getItem('phone');
    //console.log(phone);

    $http
      .get('data/order_getbyphone.php?phone=' + phone)
      .success(function (data) {
        console.log(data);
        $scope.orderList = data;
      })

  }
])







