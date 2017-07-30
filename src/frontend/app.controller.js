'use strict';

angular.module('mean').controller('AppCtrl', function ($scope, Auth, dialog, $http) {
	console.log("app controller");

	$scope.logOut = function(){
		Auth.logOut();
        // localStorageService.remove("token");
	}

	$scope.showMenu = function(){
		return Auth.getToken();
	}

    $scope.createNew = function () {
        var dialogData = {
            users: function users(){
                return $http({
                    method: 'GET',
                    url: 'http://localhost:3000/user',
                }).then(function successCallback(response) {
                    console.log(response);
                    return response.data;
                }, function errorCallback(response) {
                    console.log(response);
                    return {
                        common: response.data.message
                    }
                });
            },
            projects: function projects(){
                return $http({
                    method: 'GET',
                    url: 'http://localhost:3000/projects',
                }).then(function successCallback(response) {
                    console.log(response);
                    return response.data;
                }, function errorCallback(response) {
                    console.log(response);
                    return {
                        common: response.data.message
                    }
                });
            }
        }
        var modal = dialog.showCustomDialog('frontend/dialogs/create_new.html', 'CreateNewCtrl', dialogData);
        modal.result.then(function () {
            // TODO
        });
    };

})