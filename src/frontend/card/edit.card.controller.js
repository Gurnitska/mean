'use strict';

angular.module('mean.app.card')
    .controller('EditCardCtrl', function ($scope, $state, $location, $q, CardService, Common, card, users, sprints) {
        card.asignee_id = card.asignee_id._id;
        if(card.sprint_id) {
            card.sprint_id = card.sprint_id._id;
        }

        $scope.card = card;
        $scope.users = users;
        $scope.sprints = sprints;
        $scope.statuses = [
            {id: 'TODO', name: 'TODO'},
            {id: 'DOING', name: 'DOING'},
            {id: 'DONE', name: 'DONE'}
        ]

        $scope.updateEmptyProjectSprint = function(property){
            if(!property){
                return "Not assign";
            }else{
                return property;
            }
        }
        $scope.save = function(card){
            CardService.updateCard(card);
            $state.go('mean.app.card.details', { id: $scope.card._id } );
        }


    });