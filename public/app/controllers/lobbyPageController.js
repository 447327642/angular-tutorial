angular.module('myApp')
	.controller('lobbyPageController', function ($scope, $state, $location, User) {
		$scope.username = User.getUsername();
	});