angular.module('mean.app.card', ['mean.app.common']);

angular.module('mean.app.card').config(function ($stateProvider, $provide) {
	$stateProvider
		.state('mean.app.card', {
			url: '/card',
            abstract: true,
            template: '<ui-view/>'
		})
		.state('mean.app.card.details', {
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
        .state('mean.app.card.edit', {
            url: '/edit/{id:\\w+}',
            templateUrl: 'frontend/card/edit.card.html',
            controller: 'EditCardCtrl',
            resolve: {
                card: function($stateParams, Common){
                    var id = $stateParams.id;
                    return Common.getCardById(id);
                },
				users: function(Common){
                	return Common.getUsers();
				},
				sprints: function(card, Common){
					console.log(card);
					return Common.getSprintsByProjectId(card.project_id._id);
				}
            }
        })
	})