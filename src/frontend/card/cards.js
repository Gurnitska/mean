angular.module('mean.app.card', ['mean.app.common']);

angular.module('mean.app.card').config(function ($stateProvider, $provide) {
	$stateProvider
		.state('mean.app.card', {
			url: '/card',
            abstract: true,
            template: '<ui-view/>'
		})
		.state('mean.app.card.edit', {
			url: '/{id:\\w+}',
			templateUrl: 'frontend/card/card.html',
			controller: 'CardDetailsCtrl',
			resolve: {
				card: function($stateParams, Common){
					var id = $stateParams.id;
					return Common.getCardById(id);
				}
			}
		})
	})