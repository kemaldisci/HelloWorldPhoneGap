var app = angular.module('xApp', []);

app.controller('xCtrl', function($scope,$http,$interval) {
    $scope.myFunction = function() {
        $scope.time = new Date().toLocaleTimeString();
        $interval(function () {
            $scope.time = new Date().toLocaleTimeString();
        }, 1000);
        $http.get("https://www.w3schools.com/angular/customers.php").then(
            function isSuccess(response) {
                $scope.result = response.status
                $scope.xdata = response.data.records;
            }, 
            function isError(response) {
                $scope.result = response.status ;
            });
            $scope.count="Fixed";
  }});