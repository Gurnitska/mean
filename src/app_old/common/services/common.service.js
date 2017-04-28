'use strict';

angular.module('task2.common').service('Common', function($resource) {
	var cards = null;
	var sprints = null;
	var projects = null;

	this.getCards = function(){
		if (cards) {
			return cards;
		}
		else {
			var list = $resource('/app/common/services/cards.json').query();
			list.$promise.then(function (data) {
				cards = list;
			});
			return list;
		}
	}
	this.getCardById = function(id){
		return {
			"id":id,
			"name": "Test card",
			"description":"Some description"
		}
	}
	this.getProjectById = function(id){
		var list = $resource('/app/common/services/project.json').get();
		return list;
	}

	this.getSprints = function(){
		if (sprints) {
			return sprints;
		}
		else {
			var list = $resource('/app/common/services/sprints.json').query();
			list.$promise.then(function (data) {
				sprints = list;
			});
			return list;
		}
	}

	this.getProjects = function(){
		if (projects) {
			return projects;
		}
		else {
			var list = $resource('/app/common/services/projects.json').query();
			list.$promise.then(function (data) {
				projects = list;
			});
			return list;
		}
	}

})