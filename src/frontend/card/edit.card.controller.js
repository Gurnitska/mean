'use strict';

angular.module('mean.app.card')
    .controller('EditCardCtrl', function ($scope, $state, $location, $q, CardService, Common, card, users, sprints) {
        $scope.card = card;
        $scope.users = users;
        $scope.sprints = sprints;
        $scope.statuses = [
            {id: 'TODO', name: 'TODO'},
            {id: 'DOING', name: 'DOING'},
            {id: 'DONE', name: 'DONE'}
        ]

        $scope.card.sprint_id = $scope.sprints.filter(function(item){
            return item._id === $scope.card.sprint_id;
        })[0];

        $scope.card.asignee_id = $scope.users.filter(function(item){
            return item._id === $scope.card.asignee_id;
        })[0];

        $scope.card.status = $scope.statuses.filter(function(item){
            return item.name === $scope.card.status;
        })[0];

        console.log("edit card controller");

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