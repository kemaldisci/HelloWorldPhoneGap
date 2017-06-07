var app = angular.module('xApp', []);
app.service('CreatedService', function(){
    this.CreateFunction = function (number) {
        return number.toString(36);
    }
    this.cf = function (xcode){
        return window.btoa(xcode);
    }
});
app.controller('xCtrl', function($scope,$http,$interval,CreatedService) {
    $scope.login = function(){
        if ($scope.uid==null){
            alert("Uid is null");
            return ;
        }
        else if ($scope.pwd==null){
            alert("pwd is null");
            return ;
        } 
        else
        $scope.login_error = "";    
        $scope.u_id = "User ID : " +$scope.uid;
        $scope.p_wd = "Encode password : "+CreatedService.cf($scope.pwd);
        $scope.time = "Try time : "+new Date().toLocaleTimeString();
        $http.get("http://localhost/").then(
            function isSuccess(response) {
                $scope.result = response.status
                $scope.xdata = response.data.records;
            }, 
            function isError(response) {
                $scope.result = response.status ;
            });
            $scope.fixedValue="Fixed";
    }});