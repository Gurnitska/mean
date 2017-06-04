'use strict';

angular.module('mean.app.dashboard', ['mean.app.common']);

angular.module('mean.app.dashboard').config(function ($stateProvider) {

    $stateProvider
        .state('mean.app.dashboard', {
            url: '/dashboard',
            templateUrl: 'frontend/dashboard/dashboard.html',
            controller: 'DashboardCtrl',
            resolve: {
                projects: function($http, localStorageService) {
                    return $http({
                        method: 'GET',
                        url: 'http://localhost:3000/user/project/' + localStorageService.get("token", "localStorage"),
                    }).then(function successCallback(response) {
                        console.log(response);
                        return response.data;
                        // this callback will be called asynchronously
                        // when the response is available
                    }, function errorCallback(response) {
                        console.log(response);
                        return {
                            common: response.data.message
                        }
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });


                },
            //     cards: function(Common){
            //         return Common.getCards();
            //     }
            }
        });
})