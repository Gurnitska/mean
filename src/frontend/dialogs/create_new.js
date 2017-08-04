'use strict';

angular.module('mean')
    .controller('CreateNewCtrl', function ($scope, $uibModalInstance, users, projects, Common, $state) {
        $scope.item = {};
        $scope.users = users;
        $scope.projects = projects;

        $scope.availableTypes = [
                {id: 'project', name: 'Project'},
                {id: 'sprint', name: 'Sprint'},
                {id: 'card', name: 'Card'}
            ];
        $scope.type =  $scope.availableTypes[0]; //This sets the default value of the select in the ui


        $scope.getIconClass = function () {
            if ($scope.loading) {
                return 'fa-spinner fa-spin';
            }
            else {
                if ($scope.error) {
                    return 'fa-close';
                }
                else {
                    return $scope.imported ? 'fa-check' : '';
                }
            }
        }

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.dismiss = function () {
            $uibModalInstance.dismiss();
        };

        $scope.save = function(item){
            if($scope.type.id == 'project'){
                Common.saveProject(item);
            }else if ($scope.type.id == 'sprint'){
                Common.saveSprint(item);
            }else if($scope.type.id == 'card'){
                Common.saveCard(item);
            }
            $uibModalInstance.close();
            $state.reload();
        }

    });