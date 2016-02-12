angular.module('myApp')
	.controller('homePageController', function ($scope, $state, $location, HomeService) {
		$scope.username = '';

		$scope.login = function() {
			HomeService.login()
				.success(function (data, status, headers, config) {
					$location.path('/lobby');
				});
		};
	});