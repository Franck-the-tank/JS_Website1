var app = angular.module('website')

app.controller('userCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.signup = function(){
    $http.post("/signup", {
      username: $scope.username,
      password: $scope.password
    }).success(function(data){
      alert("registered user: "+$scope.username)
    })
  }


  $scope.login = function(){
    $http.post("/login", {
      username: $scope.username,
      password: $scope.password
    }).success(function(data){
      alert("logged in: "+$scope.username)
    }).error(function(){
      alert("wrong info")
    })
  }


  $http.get("/user").success(function(response) {
    $scope.user = response;
  });

}]);
