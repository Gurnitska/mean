'use strict';

angular.module('mean.app.project')
    .controller('ProjectDetailsCtrl', function ($scope, dialog, project, cards, sprints, ProjectService, CardService) {
        $scope.project = project;
        $scope.cards = cards;
        $scope.sprints = sprints;

        $scope.isCollapsed = function(item){
            var tempDate = new Date();
            var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
            var endDate = new Date(item.end_date.replace(pattern,'$3-$2-$1'));
            var startDate = new Date(item.start_date.replace(pattern,'$3-$2-$1'));
            return (tempDate < endDate && tempDate > startDate)? 'collapse in' : "collapse";
        };

        for (var i = 0; i < $scope.sprints.length; i++) {
            $scope.sprints[i].models = {
                selected: null,
                lists: {"TODO": [], "DOING": [], "DONE": []}
            };
        }
        $scope.models = {
            backlog: []
        };


        for (var i = 0; i < $scope.sprints.length; i++) {
            $scope.sprints[i].models.lists.TODO.push($scope.cards.filter(function (item) {
                return item.status === "TODO" && item.sprint_id === $scope.sprints[i]._id;
            }));
            $scope.sprints[i].models.lists.DOING.push($scope.cards.filter(function (item) {
                return item.status === "DOING" && item.sprint_id === $scope.sprints[i]._id;
            }));
            $scope.sprints[i].models.lists.DONE.push($scope.cards.filter(function (item) {
                return item.status === "DONE" && item.sprint_id === $scope.sprints[i]._id;
            }));
        }
        $scope.models.backlog.push($scope.cards.filter(function(item){
            return !item.sprint_id;
        }));

        $scope.onDrop = function(srcList, srcIndex, targetList, targetIndex, srcName, targetName, sprintId) {
            targetList.splice(targetIndex, 0, srcList[srcIndex]);
            if (srcList == targetList && targetIndex <= srcIndex) srcIndex++;
            srcList.splice(srcIndex, 1);
            targetList[targetIndex].status = targetName;
            if(sprintId){
                targetList[targetIndex].sprint_id = sprintId;
            }else if(!targetName){
                targetList[targetIndex].sprint_id = undefined;
            }
            CardService.updateCard(targetList[targetIndex]);
            return true;
        };

        $scope.deleteProject = function(){
            var id = $scope.project._id;
            var dialogData = {
                project: ProjectService.getProjectById(id),
                cards: ProjectService.getCardsByProjectId(id),
                sprints: ProjectService.getSprintsByProjectId(id)
            }
            var modal = dialog.showCustomDialog('frontend/dialogs/delete_project.html', 'DeleteProjectCtrl', dialogData);
            modal.result.then(function () {
                // TODO
            });
        }

        $scope.editSprint = function(id){
            var dialogData = {
                sprint: ProjectService.getSprintById(id)
            }
            var modal = dialog.showCustomDialog('frontend/dialogs/edit_sprint.html', 'EditSprintCtrl', dialogData);
            modal.result.then(function () {
                // TODO
            });
        }


});