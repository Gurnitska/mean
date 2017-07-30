'use strict';

angular.module('mean.app.common')
	.service('dialog', ['$uibModal', function ($uibModal) {
		var stdDialogsPath = 'frontend/dialogs/component/';

		var openDialogInstance = function (opts) {
			var modalInstance = $uibModal.open({
				templateUrl: opts.templateUrl,
				controller: opts.controller,
				resolve: opts.resolve,
				windowClass: opts.windowClass,
				size: opts.size
			});
			return modalInstance;
		};

		var openStandardDialog = function (templateUrl, title, message) {
			var resolve = {
				title: function () {
					return title;
				},
				message: function () {
					return message;
				}
			};

			return openDialogInstance({templateUrl: templateUrl, controller: 'StdDialogCtrl', resolve: resolve});
		};

		var openErrorsDialog = function (templateUrl, title, messages) {
			var resolve = {
				title: function () {
					return title;
				},
				messages: function () {
					return messages;
				}
			};

			return openDialogInstance({templateUrl: templateUrl, controller: 'ErrorsDialogCtrl', resolve: resolve});
		};

		this.showCustomDialog = function (templateUrl, controller, resolve, windowClass) {
			return openDialogInstance({templateUrl: templateUrl, controller: controller, resolve: resolve, windowClass: windowClass});
		};

		this.showOkDialog = function (title, message) {
			return openStandardDialog(stdDialogsPath + 'ok.html', title, message);
		};

		this.showErrorsDialog = function (title, messages) {
			return openErrorsDialog(stdDialogsPath + 'errors.html', title, messages);
		};

		this.showYesNoDialog = function(title, message){
			return openStandardDialog(stdDialogsPath + 'YesNo.html', title, message);
		};
	}])
	.controller('StdDialogCtrl', function ($scope, $uibModalInstance, title, message) {
		$scope.title = title;
		$scope.message = message;

		$scope.close = function (value) {
			$uibModalInstance.close(value);
		};

		$scope.dismiss = function () {
			$uibModalInstance.dismiss();
		};
	})
	.controller('ErrorsDialogCtrl', function ($scope, $uibModalInstance, title, messages) {
		$scope.title = title;
		$scope.messages = messages;

		$scope.close = function (value) {
			$uibModalInstance.close(value);
		};

		$scope.dismiss = function () {
			$uibModalInstance.dismiss();
		};
	});