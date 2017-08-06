'use strict';

angular.module('mean').controller('AppCtrl', function ($scope, Auth, dialog, $http, Common) {
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
            users: Common.getUsers(),
            projects: Common.getAllProjects()
        }
        var modal = dialog.showCustomDialog('frontend/dialogs/create_new.html', 'CreateNewCtrl', dialogData);
        modal.result.then(function () {
            // TODO
        });
    };

})