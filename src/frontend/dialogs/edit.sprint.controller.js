'use strict';

angular.module('mean.app.project')
    .controller('EditSprintCtrl', function ($scope, $uibModalInstance, sprint, ProjectService, $state) {
        $scope.item = {};
        $scope.sprint = sprint;

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.dismiss = function () {
            $uibModalInstance.dismiss();
        };

        $scope.save = function(){
            ProjectService.updateSprint($scope.sprint);
            $uibModalInstance.close();
            $state.go('mean.app.project.view', $scope.sprint.project_id, { reload: true });
        }

    });