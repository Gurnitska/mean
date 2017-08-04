'use strict';

angular.module('mean.app.dashboard', ['mean.app.common']);

angular.module('mean.app.dashboard').config(function ($stateProvider) {

    $stateProvider
        .state('mean.app.dashboard', {
            url: '/dashboard',
            templateUrl: 'frontend/dashboard/dashboard.html',
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