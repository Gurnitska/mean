angular.module('mean.app.dashboard', ['mean.common']);

angular.module('mean.app.dashboard', ['Common']).config(function ($stateProvider, Common) {
    $stateProvider
        .state('mean.app.dashboard', {
            url: '/dashboard',
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'DashboardCtrl',
            resolve: {
                projects: function(Common){
                    return Common.getProjects();
                },
                cards: function(Common){
                    return Common.getCards();
                }
            }
        });
})