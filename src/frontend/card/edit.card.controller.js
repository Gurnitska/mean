'use strict';

angular.module('mean.app.card')
    .controller('EditCardCtrl', function ($scope, $state, $location, $q, CardService, Common, card, users, sprints) {
        $scope.card = card;
        $scope.users = users;
        $scope.sprints = sprints;

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