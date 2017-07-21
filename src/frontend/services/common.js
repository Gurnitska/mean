'use strict';
angular.module('mean.app.common', [

]);

angular.module('mean.app.common').service('Common', function($http, Auth) {
    console.log("common service");
    var cards = null;
    var sprints = null;
    var projects = null;

    this.getCards = function(){

        return $http({
            method: 'GET',
            url: 'http://localhost:3000/user/card/' + Auth.getToken(),
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
            url: 'http://localhost:3000/card/' + id,
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

    this.getProjects = function(){
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/user/project/' + Auth.getToken(),
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

    this.getProjectById = function(id){
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/project/' + id,
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

    this.getCardsByProjectId = function(id){
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/card/project/' + id,
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
})