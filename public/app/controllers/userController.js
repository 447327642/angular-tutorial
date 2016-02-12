angular.module('myApp')
	.controller('userController', function ($scope, $state, $location, UserFactory) {
		$scope.users = [];
		$scope.orderOptions = [
			{
				id: "username"
			},
			{
				id: "createdAt"
			}
		];
		$scope.dirOptions = [
			{
				id: false,
				name: "asc"
			},
			{
				id: true,
				name: "desc"
			}
		];
		$scope.order = {
			id: "username"
		};
		$scope.direction = {
			name: "asc"
		};

		$scope.getAllUsers = function () {
		 	UserFactory.getAll()
		 		.success(function(data, status, headers, config) {
		 			$scope.users = data;
		 			console.log($scope.users);
		 		})
		 		.error(function(data, status, headers, config) {

		 		});
		};

		$scope.getAllUsers();
	});