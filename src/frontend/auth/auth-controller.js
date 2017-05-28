'use strict';
angular.module('mean.app.auth').controller('AuthCtrl', function ($scope, $http, localStorageService) {
    console.log("auth controller");

    console.log(localStorageService);
    $scope.validation = function(){
        $scope.error = null;
        if(!$scope.user){
            $scope.error = {
                common: 'Email and password are empty'
            };
            return false;
        }
        if(!$scope.user.email){
            $scope.error = {
                email: 'Email is empty'
            };
            return false;
        }
        if(!$scope.user.password){
            $scope.error = {
                password: 'Password is empty'
            };
            return false;
        }
        if($scope.selected === 'register'){
            if(!$scope.user.password == $scope.user.password_repeat){
                $scope.error = {
                    password: 'Password is not equal'
                };
                return false;
            }
        }
        return true;
    }

    $scope.selected = 'login';
    $scope.$watch("selected", function(newValue, oldValue){
        $scope.error = null;
        $scope.user = null;
    });

    $scope.login = function(){
        if (this.validation()) {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/login',
                data: {
                    email: $scope.user.email,
                    password: $scope.user.password
                }
            }).then(function successCallback(response) {
                console.log( response);
                if(response.data.message){
                    $scope.error = {
                        common: response.data.message
                    }
                }else {
                    localStorageService.set("token", JSON.stringify(response.data.token));
                }
                // this callback will be called asynchronously
                // when the response is available
            }, function errorCallback(response) {
                console.log(response);
                $scope.error = {
                    common: response.data.message
                }
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }
    }

    $scope.register = function(){
        if (this.validation()) {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/signup',
                data: {
                    email: $scope.user.email,
                    password: $scope.user.password
                }
            }).then(function successCallback(response) {
                console.log(response);
                if(response.data.message){
                    $scope.error = {
                        common: response.data.message
                    }
                }else {
                    localStorageService.set("token", JSON.stringify(response.data.token));
                }
                // this callback will be called asynchronously
                // when the response is available
            }, function errorCallback(response) {
                console.log(response);
                $scope.error = {
                    common: response.data.message
                }
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }
    }


    $scope.token = localStorageService.get('token');
})