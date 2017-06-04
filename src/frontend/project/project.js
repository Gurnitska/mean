angular.module('mean.app.project', ['mean.app.common']);

angular.module('mean.app.project').config(function ($stateProvider, $provide) {
	$stateProvider
		.state('mean.app.project', {
			url: '/project',
            abstract: true,
            template: '<ui-view/>'
		})
		.state('mean.app.project.view', {
			url: '/{id:\\d+}',
			templateUrl: 'frontend/project/project.html',
			controller: 'ProjectDetailsCtrl',
			// resolve: {
			// 	project: function($stateParams, Common){
			// 		var id = $stateParams.id;
			// 		return Common.getProjectById(id);
			// 	}
			// }
		})
	})