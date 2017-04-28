'use strict';

angular.module('task2.common')
	.service('Auth', function($resource, $q, $localStorage) {
		var loginRes = $resource('/api/authorize');
		var userRes = $resource('/api/getuser');

		this.token = {
			get: function () {
				return $localStorage.taskToken;
			},
			set: function (value) {
				$localStorage.taskToken = value;
			},
			delete: function () {
				delete $localStorage.taskToken;
			}
		};

		this.login = function (credentials) {
			var promise = loginRes.save(credentials).$promise;
			promise.then(function (data) {
				$localStorage.taskToken = data.token;
			});
			return promise;
		};

		this.getUserInfo = function () {
			var deferred = $q.defer();
			userRes.get().$promise.then(function (data) {
				deferred.resolve(data);
			}, function (error) {
				deferred.reject('Auth');
			});
			return deferred.promise;
		};
	}).service('AuthInterceptor', function ($location, $q, $injector) {
		this.request = function (config) {
			config.headers = config.headers || {};
			var Auth = $injector.get('Auth');
			var token = Auth.token.get();
			if (token) {
				config.headers.Token = token;
			}
			return config;
		};

		this.responseError = function (response) {
			if (response.status === 401) {
				$location.path('/login');
				var Auth = $injector.get('Auth');
				Auth.token.delete();
				return $q.reject(response);
			}
			else {
				return $q.reject(response);
			}
		};
	});