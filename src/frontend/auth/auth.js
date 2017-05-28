'use strict';
angular.module('mean.app.auth', [
    'ui.router'
]);
angular.module('mean.app.auth').config(function ($stateProvider, $urlRouterProvider) {
    console.log("auth module");
    $stateProvider
        .state('mean.app.auth', {
            url: '/auth',
            templateUrl: 'frontend/auth/auth.html',
            controller: "AuthCtrl"
        });
    // $urlRouterProvider.otherwise('');
})