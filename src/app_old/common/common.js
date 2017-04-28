'use strict';

angular.module('task2.common', [
	'ngResource',
	'ui.bootstrap',
	// 'angularjs-dropdown-multiselect',
	'ngStorage'])
.config(function ($httpProvider) {
	$httpProvider.interceptors.push('AuthInterceptor');
});