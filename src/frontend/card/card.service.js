'use strict';

angular.module('mean.app.card').service('CardService', function($http) {

    this.updateCard = function(card){
        if(typeof card.asignee_id === 'object'){
            card.asignee_id = card.asignee_id._id;
        }
        if(typeof card.sprint_id === 'object') {
            card.sprint_id = card.sprint_id._id;
        }
        if(typeof card.status === 'object') {
            card.status = card.status.name;
        }
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

    this.deleteCard = function(card){
        return $http({
            method: 'POST',
            url: 'http://localhost:3000/card/delete/' + card._id,
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
    this.deleteCards = function(ids){
        return $http({
            method: 'POST',
            url: 'http://localhost:3000/cards/deleteids',
            params: {ids : ids.toString()}
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