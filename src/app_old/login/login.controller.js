'use strict';

angular.module('task2.login')
    .controller('LoginCtrl', function ($scope, $state, $location, Auth) {
        $scope.user = {};
        $scope.errors = {};

        $scope.login = function (user, form) {
            if(form.$valid) {
                $scope.submitted = true;

                Auth.login(user).then(function () {
                    $scope.submitted = false;
                    $location.path('/');
                }, function (error) {
                    $scope.errors.other = error.message || error.data;
                    $scope.submitted = false;
                });
            } else {
                $scope.errors.other = "Please enter your username and password.";
            }
        };
});