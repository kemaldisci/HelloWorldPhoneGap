var app = angular.module('xApp', []);
app.service('CreatedService', function(){
    this.CreateFunction = function (number) {
        return number.toString(2);
    }

});
app.service('CreatedService2', function(){
    this.CreateFunction2 = function(enc){
        return enc.window.btoa(enc);

    }
});

app.controller('xCtrl', function($scope,$http,$interval,CreatedService) {
    $scope.number = CreatedService.CreateFunction(1453);
    var str = "ss"
    $scope.enc = enc.window.btoa(str);
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
        $scope.fixedValue="Fixed";
    });