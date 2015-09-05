/**
* services.auth Module
*
* Description
*/
angular
	.module('services.auth', [])
	.service('authService', ['$rootScope', function ($rootScope) {
		
		this.isLoggedIn = function() {
			document.cookie = 'TOKEN=tokenval';

			return true;
		}

		this.checkToken = function() {
			var promise = $http({
				method: 'POST',
				url: 'http://picstar.dev/api/jn',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
					// 'Authorization': 'Bearer' + token
				}
			});
			return promise;
		}

		this.login = function(formData) {
			var promise = $http({
				method: 'POST',
				url: 'http://picstar.dev/api/login',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					// 'Authorization': 'Bearer' + token
				},
				data: formData
			});
			return promise;
		}

}]);