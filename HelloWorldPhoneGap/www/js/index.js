var app = angular.module('index', ["ngRoute"]);
app.service('indexService', function(){
    this.encode = function (xcode){
        return window.btoa(xcode);
    }
});
app.controller('indexCtrl', function( $scope,$http,$interval,indexService
    
  /*  $scope,$http,$interval, $resource, $httpParamSerializer, $cookies*/) {


     $scope.data = {
        grant_type:"password", 
        username: "", 
        password: "", 
        client_id: "clientIdPassword"
    };


    $scope.login = function(){

     /*   
        if ($scope.data.username==null){
            alert("Uid is null");
            return ;
        }
        else if ($scope.data.password==null){
            alert("pwd is null");
            return ;
        }
        else 


        $scope.encoded = indexService.encode($scope.password);
*/

      /*

        var req = {
            method: 'POST',
            url: "http://localhost:8080/spring-security-oauth-server/oauth/token",
            headers: {
                "Authorization": "Basic " + $scope.encoded,
                "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            data: $httpParamSerializer($scope.data)
        }
        $http(req).then(function(data){
            $http.defaults.headers.common.Authorization = 
              'Bearer ' + data.data.access_token;
            $cookies.put("access_token", data.data.access_token);
            window.location.href = "./home.html";
        }); 

*/

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