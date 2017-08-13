'use strict';

angular.module('mean')
    .controller('CreateNewCtrl', function ($scope, $uibModalInstance, users, projects, ProjectService, CardService, $state) {
        $scope.item = {};
        $scope.users = users;
        $scope.projects = projects;

        $scope.availableTypes = [
                {id: 'project', name: 'Project'},
                {id: 'sprint', name: 'Sprint'},
                {id: 'card', name: 'Card'}
            ];
        $scope.type =  $scope.availableTypes[0]; //This sets the default value of the select in the ui

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.dismiss = function () {
            $uibModalInstance.dismiss();
        };

        $scope.save = function(item){
            if($scope.type.id == 'project'){
                ProjectService.saveProject(item);
            }else if ($scope.type.id == 'sprint'){
                ProjectService.saveSprint(item);
            }else if($scope.type.id == 'card'){
                CardService.saveCard(item);
            }
            $uibModalInstance.close();
            $state.reload();
        }

        $scope.$watch('type', function () {
            console.log();
            $scope.form.$submitted = false;
            $scope.item = {};
        })

    });