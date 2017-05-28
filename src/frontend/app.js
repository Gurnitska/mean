angular.module('mean', [
	'ui.router',
    'LocalStorageModule',
    'ngRoute',
	'mean.app.auth',
    'mean.app.dashboard',
    'mean.common'

]);
angular.module('mean').config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
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
		 $urlRouterProvider.otherwise('/auth');
    $httpProvider.interceptors.push(['$q', '$location', 'localStorageService', function($q, $location, localStorageService) {
        return {
            'request': function (config) {
                config.headers = config.headers || {};
                if (localStorageService.get('token')) {
                    config.headers.Authorization = 'Mean ' + localStorageService.get('token');
                }
                return config;
            },
            'responseError': function(response) {
                if(response.status === 401 || response.status === 403) {
                    $location.path('/auth');
                }
                return $q.reject(response);
            }
        };
    }]);

}).run(function ( $filter, $rootScope, $state, $timeout, localStorageService) {
	console.log("application is running");
	if(!localStorageService.get('token')){
        $timeout(function() { $state.go('mean.app.auth'); });
    }else{
        $timeout(function(){$state.go('mean.app.dashboard')});
    }

});