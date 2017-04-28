angular.module('task2.cards', ['task2.common']);

angular.module('task2.cards').config(function ($stateProvider, $provide) {
	$stateProvider
		.state('app.cards', {
			url: '/cards',
            abstract: true,
            template: '<ui-view/>'
		})
		.state('app.cards.edit', {
			url: '/{id:\\d+}',
			templateUrl: 'app/cards/card.html',
			controller: 'CardDetailsCtrl',
			resolve: {
				card: function($stateParams, Common){
					var id = $stateParams.id;
					return Common.getCardById(id);
				}
			}
		})
	})