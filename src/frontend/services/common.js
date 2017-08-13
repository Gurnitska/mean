'use strict';
angular.module('mean.app.common', [

]);

angular.module('mean.app.common').service('Common', function($http, Auth) {
    console.log("common service");

    this.getUserCards = function(){
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/users/' + Auth.getToken() + '/cards',
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

    this.getUserProjects = function(){
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/users/' + Auth.getToken()+ '/projects' ,
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

    this.getAllProjects = function projects(){
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/projects',
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

    this.getUsers = function(){
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/users',
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