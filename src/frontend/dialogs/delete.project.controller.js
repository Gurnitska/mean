'use strict';

angular.module('mean.app.project')
    .controller('DeleteProjectCtrl', function ($scope, $uibModalInstance, project, cards, sprints, Common, CardService, $state) {
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
            Common.deleteProject($scope.project);
            CardService.deleteCards($scope.cards.map(function(a) {
                console.log(a);
                return a._id;
            }))
            $uibModalInstance.close();
            $state.go('mean.app.dashboard');
        }

    });