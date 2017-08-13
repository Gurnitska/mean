'use strict';

angular.module('mean.app.card').service('CardService', function($http) {

    this.updateCard = function(card){
        card.project_id = card.project_id._id;
        return $http({
            method: 'POST',
            url: 'http://localhost:3000/cards/' + card._id,
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
            method: 'DELETE',
            url: 'http://localhost:3000/cards/' + card._id,
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
            params: {ids : ids}
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

    this.getCardById = function(id){
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/cards/' + id,
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


    this.saveCard = function(card){
        card.asignee_id = card.asignee_id._id;
        card.project_id = card.project_id._id;
        return $http({
            method: 'POST',
            url: 'http://localhost:3000/cards',
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