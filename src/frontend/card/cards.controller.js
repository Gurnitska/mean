'use strict';

angular.module('mean.app.card')
    .controller('CardDetailsCtrl', function ($scope, $state, $location,  CardService, card) {
    	$scope.card = card;
        console.log("card controller");

        $scope.deleteCard = function(card){
            CardService.deleteCard(card);
            $state.go('mean.app.dashboard');
        }
});