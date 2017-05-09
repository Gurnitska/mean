'use strict';
angular.module('mean.auth').controller('AuthCtrl', function ($scope, $http) {
    console.log("auth controller");
    $scope.selected = 'login';

    $scope.login = function(){
        $http({
            method: 'POST',
            url: 'http://localhost:3000/login',
            data: {
                email: $scope.email,
                password: $scope.password
            }
        }).then(function successCallback(response) {
            console.log(response);
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            console.log(response);
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }

})