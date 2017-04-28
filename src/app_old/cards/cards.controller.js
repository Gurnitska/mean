'use strict';

angular.module('task2.cards')
    .controller('CardDetailsCtrl', function ($scope, $state, $location, card) {
    	$scope.card = card;
    	
        console.log("card controller");


});