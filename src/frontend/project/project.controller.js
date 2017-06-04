'use strict';

angular.module('mean.app.project')
    .controller('ProjectDetailsCtrl', function ($scope, $state, $location, project) {
	   	// var updateSprints = function(project){
    		// $scope.backlog = project.sprints.filter(function(item){
    		// 	return item.name == "Backlog";
    		// })[0];
    		// project.sprints = project.sprints.filter(function(item){
    		// 	return item.name != "Backlog";
    		// });
    		// return project;
        // };
        // var updateTempSprints = function(start, end, sprints){
    		// return sprints.slice(start,end);
        // }
        // $scope.project = updateSprints(project);
        // $scope.firstSprint = 0;
        // $scope.lastSprint = 3;
        // $scope.tempSprints = updateTempSprints($scope.firstSprint, $scope.lastSprint, $scope.project.sprints);
        //
        // $scope.previousSprint = function(){
    		// $scope.firstSprint -=1;
    		// $scope.lastSprint -=1;
    		// $scope.tempSprints = updateTempSprints($scope.firstSprint, $scope.lastSprint, $scope.project.sprints);;
        //
        // };
        // $scope.nextSprint = function(){
    		// $scope.firstSprint +=1;
    		// $scope.lastSprint +=1;
    		// $scope.tempSprints = updateTempSprints($scope.firstSprint, $scope.lastSprint, $scope.project.sprints);;
        //
        // };
        // $scope.show = function(value, field){
    		// if(field == 'firstSprint'){
    		// 	return value >= 1 ? true: false;
    		// }
    		// if(field == 'lastSprint'){
    		// 	return value <= $scope.project.sprints.length ? true: false;
    		// }
        // }
        console.log("project controller");
        //
        // $scope.deleteProject = function(id){
        //
        // }
        //
        // $scope.addSprint = function(id){
        //
        // }
        // $scope.removeCard = function (column, card) {
    		// BoardService.removeCard($scope.project, column, card);
  		// };
  		// $scope.carouselValue = function(length){
  		// 	if(length > 4){
  		// 		return 4;
  		// 	}else {
  		// 		return length;
  		// 	}
  		// }

        // $scope.addNewCard = function(column){

        // }

        // $scope.removeCard = function(){

        // }
});