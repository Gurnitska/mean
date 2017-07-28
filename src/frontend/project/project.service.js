'use strict';

angular.module('mean.app.project').service('ProjectService', function($http, Auth) {

    this.updateStatus = function(card){
        return $http({
            method: 'POST',
            url: 'http://localhost:3000/card/' + card._id,
            params: card
        }).then(function successCallback(response) {
            console.log(response);
            return response.data;
        }, function errorCallback(response) {
            console.log(response);
            return {
                common: response.data.message
            }
        });
    }


});