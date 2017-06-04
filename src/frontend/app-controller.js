'use strict';

angular.module('mean').controller('AppCtrl',['$scope', 'Auth', function ($scope, Auth) {
	console.log("app controller");

	$scope.logOut = function(){
		Auth.logOut();
        // localStorageService.remove("token");
	}

	$scope.showMenu = function(){
		return Auth.getToken();
	}

}])