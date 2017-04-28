angular.module('mean', [
	'ui.router'
]);
angular.module('mean').config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('mean', {
			url: '',
			abstract: true,
			template: '<ui-view/>',
		})
		.state('mean.app', {
			url: '',
			templateUrl: 'frontend/app.html',
			controller: "AppCtrl"
		});
		 // $urlRouterProvider.otherwise('mean.app');
}).run(function ($filter, $rootScope, $timeout) {
	console.log("application is running");

});