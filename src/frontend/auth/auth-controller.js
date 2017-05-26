'use strict';
angular.module('mean.auth').controller('AuthCtrl', function ($scope, $http) {
    console.log("auth controller");
    $scope.user = {};
    $scope.validation = function(){
        $scope.error = null;
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
            if($scope.user.password == $scope.user.password_repeat){
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
                $scope.error = {
                    common: response.data.message
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
                $scope.error = {
                    common: response.data.message
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

})