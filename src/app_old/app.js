angular.module('task2', [
	'ui.router',
	'as.sortable',
	'task2.common',
	'task2.dashboard',
	'task2.cards',
	'task2.project'
]);
angular.module('task2').config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		// .state('mean', {
		// 	url: '',
		// 	abstract: true,
		// 	template: '<ui-view/>',
		// })
		.state('app', {
			url: '*',
			// abstract: true,
			templateUrl: 'app/app.html',
			controller: "AppCtrl",
			// resolve: {
			// 	user: function (Auth) {
			// 		return Auth.getUserInfo();
			// 	}
			// }
		});
		 $urlRouterProvider.otherwise('/');
}).run(function ($filter, $rootScope, $timeout) {
	console.log("application is running");
	// Date.prototype.toJSON = function(){ 
	// 	return $filter('date')(this, 'dd.MM.yyyy'); 
	// };

	// var loadingTimer;

	// var stopLoading = function () {
	// 	if (loadingTimer) {
	// 		$timeout.cancel(loadingTimer);
	// 		loadingTimer = null;
	// 	}
	// 	$rootScope.$stateLoading = false;
	// };

	// $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
	// 	if (!loadingTimer) {
	// 		loadingTimer = $timeout(function () {
	// 			$rootScope.$stateLoading = true;
	// 		}, 500);
	// 	}
	// });

	// $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
	// 	stopLoading();
	// });

	// $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams) {
	// 	stopLoading();
	// });
});