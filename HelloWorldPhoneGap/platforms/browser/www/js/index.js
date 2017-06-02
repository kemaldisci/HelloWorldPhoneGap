/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


var app = angular.module('myApp', ["ngResource","ngRoute","ngCookies"]);
app.controller('mainCtrl', 
  function($scope, $resource, $http, $httpParamSerializer, $cookies) {
     
    $scope.data = {
        grant_type:"password", 
        username: "", 
        password: "", 
        client_id: "clientIdPassword"
    };
    $scope.encoded = btoa("clientIdPassword:secret");
     
    $scope.login = function() {   
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
            window.location.href="index";
        });   
   }    
});


var isLoginPage = window.location.href.indexOf("signin") != -1;
if(isLoginPage){
    if($cookies.get("access_token")){
        window.location.href = "index";
    }
} else{
    if($cookies.get("access_token")){
        $http.defaults.headers.common.Authorization = 
          'Bearer ' + $cookies.get("access_token");
    } else{
        window.location.href = "signin";
    }
}
