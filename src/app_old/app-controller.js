angular.module('task2').controller('AppCtrl', function ($scope, $location, Auth) {
	console.log("app controller");
	$scope.signOut = function(){
		Auth.token.delete();
		$location.path('/login');
	}
})