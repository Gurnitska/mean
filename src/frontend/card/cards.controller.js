'use strict';

angular.module('mean.app.card')
    .controller('CardDetailsCtrl', function ($scope, $state, $location, card) {
    	$scope.card = card;
    	
        console.log("card controller");

        $scope.updateEmptyProjectSprint = function(property){
            if(!property){
                return "Not assign";
            }else{
                return property;
            }
        }


});