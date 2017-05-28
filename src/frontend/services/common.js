'use strict';

angular.module('mean.common').service('Common', function() {
    var cards = null;
    var sprints = null;
    var projects = null;

    this.getCards = function(){

            $http({
                method: 'GET',
                url: 'http://localhost:3000/user/cards/' + '5906173bdc4db91b08be4fce',
            }).then(function successCallback(response) {
                console.log(response);
                // this callback will be called asynchronously
                // when the response is available
            }, function errorCallback(response) {
                console.log(response);
                $scope.error = {
                    common: response.data.message
                }
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

    }
    this.getProjects = function(){

        $http({
            method: 'GET',
            url: 'http://localhost:3000/user/projects/' + '5906173bdc4db91b08be4fce',
        }).then(function successCallback(response) {
            console.log(response);
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            console.log(response);
            $scope.error = {
                common: response.data.message
            }
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });

    }
})