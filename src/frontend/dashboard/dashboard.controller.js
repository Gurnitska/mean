'use strict';

angular.module('mean.app.dashboard')
    .controller('DashboardCtrl', function ($scope, $state, $location, projects, cards) {
    	$scope.projects = projects;
    	$scope.cards = cards;

        console.log("dashboard controller");
        console.log(projects);
        console.log(cards);

        $scope.getProjectName = function(project_id){
            return $scope.projects.filter(function(item){
                return item._id === project_id;
            })[0].name;
        }

});