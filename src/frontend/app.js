angular.module('mean', [
	'ui.router',
    'ngStorage',
    'ngRoute',
	'mean.auth'
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
    $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
        return {
            'request': function (config) {
                config.headers = config.headers || {};
                if ($localStorage.token) {
                    config.headers.Authorization = 'Bearer ' + $localStorage.token;
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

}).run(function ( $filter, $rootScope, $state, $timeout, $localStorage) {
	console.log("application is running");
	if(!$localStorage.token){
        $timeout(function() { $state.go('mean.app.auth'); });
    }

});