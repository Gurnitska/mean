'use strict';
angular.module('mean.app.common', [

]);

angular.module('mean.app.common').service('Common', function($http, Auth) {
    console.log("common service");

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

    this.getUserProjects = function(){
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
    this.getSprintsByProjectId = function(id){
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/project/sprint/' + id,
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
    this.saveProject = function(project){
        project.users = project.users.map(function(a) {
            console.log(a);
            return a._id;
        });
        return $http({
            method: 'POST',
            url: 'http://localhost:3000/project/new',
            params: project
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

    this.saveSprint = function(sprint){
        sprint.project_id = sprint.project_id._id;
        return $http({
            method: 'POST',
            url: 'http://localhost:3000/sprint/new',
            params: sprint
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
            url: 'http://localhost:3000/card/new',
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

    this.getUsers = function(){
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/user',
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