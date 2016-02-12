angular.module('UserService', []).service('User', function () {
	this.getUsername = function() {
		return this.username;
	};

	this.setUsername = function(username) {
		this.username = username;
	}
});