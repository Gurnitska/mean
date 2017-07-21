'use strict';

angular.module('mean.app.project')
    .controller('ProjectDetailsCtrl', function ($scope, $state, $location, project, cards) {
        $scope.project = project;
        $scope.cards = cards;

        console.log(cards);

        $scope.removeCard = function(){

        }

        $scope.models = {
            selected: null,
            lists: {"A": [], "B": [], "C":[]}
        };

        // Generate initial model
        for (var i = 1; i <= 3; ++i) {
            $scope.models.lists.A.push({label: "Item A" + i});
            $scope.models.lists.B.push({label: "Item B" + i});
            $scope.models.lists.C.push({label: "Item C" + i});
        }

        // Model to JSON for demo purpose
        $scope.$watch('models', function(model) {
            $scope.modelAsJson = angular.toJson(model, true);
        }, true);

});