'use strict';

angular.module('mean.app.project')
    .controller('ProjectDetailsCtrl', function ($scope, project, cards, sprints, CardService) {
        $scope.project = project;
        $scope.cards = cards;
        $scope.sprints = sprints;

        $scope.currentSprint = sprints.filter(function(item){
            var tempDate = new Date();
            var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
            var currentDate = new Date(item.end_date.replace(pattern,'$3-$2-$1'));
            return tempDate < currentDate;
        })[0];
        console.log(cards);
        console.log(sprints);


        $scope.models = {
            selected: null,
            lists: {"TODO": [], "DOING": [], "DONE":[]},
            backlog: []
        };

        $scope.models.lists.TODO.push($scope.cards.filter(function(item){
            return item.status === "TODO" && item.sprint_id === $scope.currentSprint._id;
        }));
        $scope.models.lists.DOING.push($scope.cards.filter(function(item){
            return item.status === "DOING" && item.sprint_id === $scope.currentSprint._id;
        }));
        $scope.models.lists.DONE.push($scope.cards.filter(function(item){
            return item.status === "DONE" && item.sprint_id === $scope.currentSprint._id;
        }));
        $scope.models.backlog.push($scope.cards.filter(function(item){
            return item.sprint_id != $scope.currentSprint._id;
        }));

        $scope.onDrop = function(srcList, srcIndex, targetList, targetIndex, srcName, targetName) {
            targetList.splice(targetIndex, 0, srcList[srcIndex]);
            if (srcList == targetList && targetIndex <= srcIndex) srcIndex++;
            srcList.splice(srcIndex, 1);
            targetList[targetIndex].status = targetName;
            if(!srcName){
                targetList[targetIndex].sprint_id = $scope.currentSprint._id;
            }else if(!targetName){
                targetList[targetIndex].sprint_id = undefined;
            }
            CardService.updateCard(targetList[targetIndex]);
            return true;
        };


});