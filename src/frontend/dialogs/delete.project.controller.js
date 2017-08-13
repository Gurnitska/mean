'use strict';

angular.module('mean.app.project')
    .controller('DeleteProjectCtrl', function ($scope, $uibModalInstance, project, cards, sprints, ProjectService, CardService, $state) {
        $scope.item = {};
        $scope.sprints = sprints;
        $scope.project = project;
        $scope.cards = cards;

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.dismiss = function () {
            $uibModalInstance.dismiss();
        };

        $scope.delete = function(){
            ProjectService.deleteProject($scope.project);
            if(cards) {
                CardService.deleteCards($scope.cards.map(function (a) {
                    console.log(a);
                    return a._id;
                }))
            }
            $uibModalInstance.close();
            $state.go('mean.app.dashboard');
        }

    });