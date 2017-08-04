angular.module('task2.dashboard', ['task2.common']);

angular.module('task2.dashboard').config(function ($stateProvider) {
    $stateProvider
        .state('app.dashboard', {
            url: '/dashboard',
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'DashboardCtrl',
            resolve: {
                projects: function(Common){
                    return Common.getUserProjects();
                },
                cards: function(Common){
                    return Common.getCards();
                }
            }
        });
})