'use strict';

angular.module('mean.app.project', ['ui.router', 'mean.app.common']);

angular.module('mean.app.project').config(function ($stateProvider) {
	$stateProvider
		.state('mean.app.project', {
			url: '/project',
            abstract: true,
            template: '<ui-view/>'
		})
		.state('mean.app.project.view', {
			url: '/{id:\\w+}',
			templateUrl: 'frontend/project/project.html',
			controller: 'ProjectDetailsCtrl',
			resolve: {
				project: function($stateParams, Common){
					console.log()
					var id = $stateParams.id;
					return Common.getProjectById(id);
				}
			}
		})
	})