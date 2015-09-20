/**
* services.auth Module
*
* Description
*/
angular
	.module('services.auth', [])
	.service('authService', ['$rootScope', '$http', function ($rootScope, $http) {
		// todo in login
		$rootScope.username = "Jan";

		/**
		 *	Check if there is a cookie
		 */
		this.checkCookie = function() {

			var cookie, token; 

			cookie = document.cookie;
			token = cookie.split('=');

			
			// if the token is expired then return false
			if (token[0] === '') {
				return false;
			} 

			return true;

		};


	    /** 
	     * Deletes the token cookie and refreshes the website
	     */
	    $rootScope.logout = function() {
	    	console.log('logout');
			document.cookie = 'TOKEN=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
			location.reload();	        
	    };

	    /**
	     * Checks token if it is valid from the server
 	 	 *
 	 	 * @return promise
	     */
		this.checkToken = function() {
			if (!this.checkCookie()) {
				return false;
			}

			var token = this.getToken();
			var promise = $http({
				method: 'POST',
				url: 'http://picstar.dev/api/token',
				headers: {
					'Accept': 'application/json',
					'Authorization': 'Bearer ' + token
				}
			});
			return promise;
		};

		/**
		 * @return token {String}
		 */
		this.getToken = function() {
			var tokenArray,
				token;

			if (!$rootScope.isLoggedIn) {
				return false;
			}

			tokenArray = document.cookie.split('=');
			token = tokenArray[1];

			return token;
		};

		/**
		 * Returns a promise for logging in
		 *
		 * @params formData {Object}
		 *
		 * @return promise
		 */
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
		};

		/**
		 * Returns a promise for logging in
		 *
		 * @params formData {Object}
		 *
		 * @return promise
		 */
		this.register = function(formData) {
			var promise = $http({
				method: 'POST',
				url: 'http://picstar.dev/api/user/new',
				headers: {
					'Accept': 'application/json'
				},
				data: formData
			});
			return promise;
		};
		
		var self = this;
		/**
		 * Check if user is logged in by cookie
		 */
		(function(){
			$rootScope.isLoggedIn = self.checkCookie();

			if (!self.checkCookie()) {
				return;
			} else {
				self.checkToken()
					.success(function(data) {
						console.log(data);
						// if (self.getToken() !== data) {
						// 	$rootScope.logout();
					 //    	$rootScope.isLoggedIn = false;
						// 	return false;	
						// }

					    $rootScope.isLoggedIn = true;
					})
					.error(function(err) {
						console.log(err);
					    $rootScope.isLoggedIn = false;
					});
			}

			
		})();
}]);