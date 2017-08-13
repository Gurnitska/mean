'use strict';

angular.module('mean.app.project').service('ProjectService', function($http) {

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

    this.getProjectById = function(id){
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/projects/' + id,
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
            url: 'http://localhost:3000/projects/' + id +'/cards',
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
            url: 'http://localhost:3000/projects/' + id + '/sprints',
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

    this.getSprintById = function(id){
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/sprints/' + id,
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

    this.updateSprint = function(sprint){
        return $http({
            method: 'POST',
            url: 'http://localhost:3000/sprints/' + sprint._id,
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

    this.deleteProject = function(project){
        return $http({
            method: 'DELETE',
            url: 'http://localhost:3000/projects/' + project._id,
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
            return a._id;
        });
        return $http({
            method: 'POST',
            url: 'http://localhost:3000/projects',
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
            url: 'http://localhost:3000/sprints',
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

})