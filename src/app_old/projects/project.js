angular.module('task2.project', ['task2.common']);

angular.module('task2.project').config(function ($stateProvider, $provide) {
	$stateProvider
		.state('app.project', {
			url: '/project',
            abstract: true,
            template: '<ui-view/>'
		})
		.state('app.project.view', {
			url: '/{id:\\d+}',
			templateUrl: 'app/projects/project.html',
			controller: 'ProjectDetailsCtrl',
			resolve: {
				project: function($stateParams, Common){
					var id = $stateParams.id;
					return Common.getProjectById(id);
				}
			}
		})
	})