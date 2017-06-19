var app = angular.module('index', ["ngRoute"]);
app.service('indexService', function(){
    this.encode = function (xcode){
        return window.btoa(xcode);
    }
});
app.controller('indexCtrl', function($scope,$http,$interval) {
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
        
        window.location.href = "./home.html";
        /*
        $scope.login_error = "";    
        $scope.u_id = "User ID : " +$scope.uid;
        $scope.p_wd = "Encode password : "+indexService.encode($scope.pwd);
        $scope.time = "Try time : "+new Date().toLocaleTimeString();
        */
        /*
        $http.get("http://localhost/").then(
            function isSuccess(ResponseResult) {
                $scope.ResponseResult = response.status
                $scope.xdata = response.data.records;
            }, 
            function isError(response) {
                $scope.ResponseResult = response.status ;
            });
            $scope.fixedValue="Fixed";
            */
    }});