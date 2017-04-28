angular.module('task2.login', ['task2.common']);

angular.module('task2.login').config(function ($stateProvider) {
    $stateProvider
        // .state('login', {
        //     url: '',
        //     abstract: true,
        //     template: '<ui-view/>',
        // })
        .state('login', {
            url: '/login',
            templateUrl: 'app/login/login.html',
            controller: 'LoginCtrl'
        });
}).run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        if (error == 'Auth') {
            $state.go('task2.login');
        }
    });
});