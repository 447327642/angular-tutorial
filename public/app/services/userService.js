angular.module('UserService', [])
	.service('User', function () {
		this.getUsername = function() {
			return this.username;
		};

		this.setUsername = function(username) {
			this.username = username;
		}
	})
	.factory('UserFactory', function($http) {
		return {
			getAll: function() {
				return $http.get('/users');
			}
		}
	});