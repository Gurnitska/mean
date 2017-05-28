'use strict';

angular.module('mean.app.dashboard')
    .controller('DashboardCtrl', function ($scope, $state, $location, projects, cards) {
    	$scope.projects = projects;
    	$scope.cards = cards;

        console.log("dashboard controller");

});