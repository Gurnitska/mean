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
				card: function($stateParams, CardService){
					var id = $stateParams.id;
					return CardService.getCardById(id);
				}
			}
		})
        .state('mean.app.card.edit', {
            url: '/edit/{id:\\w+}',
            templateUrl: 'frontend/card/edit.card.html',
            controller: 'EditCardCtrl',
            resolve: {
                card: function($stateParams, CardService){
                    var id = $stateParams.id;
                    return CardService.getCardById(id);
                },
				users: function(Common){
                	return Common.getUsers();
				},
				sprints: function(card, ProjectService){
					console.log(card);
					return ProjectService.getSprintsByProjectId(card.project_id._id);
				}
            }
        })
	})