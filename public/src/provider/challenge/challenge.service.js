/**
* challengeService Module
*
* Description
*/
angular
	.module('services.challenge')
	.service('challenges', ['$rootScope', '$http', function($rootScope, $http){

		var promise = $http.get('http://picstar.dev/jn');
		var result;
		promise.then(function(data) {
			data = result;
		});

		return $rootScope;
}]);