angular.module('myApp')
	.controller('homePageController', function ($scope, $state, $location, HomeService, User) {
		$scope.username = '';

		$scope.login = function() {
			HomeService.login()
				.success(function (data, status, headers, config) {
					User.setUsername($scope.username);
					$location.path('/lobby');
				});
		};
	});