/**
* services.user Module
*
* Description
*/
angular
	.module('services.user')
	.service('userService', ['$http', function($http) {
		
		/**
		 * get the user profile
		 */
		this.getUserData = function(username) {
			return $http({
				method: 'GET',
				url: 'http://picstar.dev/api/' + username,
				headers: {
					'Accept': 'application/json',
					// 'Authorization': 'Bearer' + token
				}
			});
		};
	}])