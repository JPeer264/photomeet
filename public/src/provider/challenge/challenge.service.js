/**
* challengeService Module
*
* Description
*/
angular
	.module('services.challenge')
	.service('challengeService', ['$rootScope', '$http', function($rootScope, $http){

		this.getChallenges = function(challengeType, challengeNumber) {

			var urlAdding = challengeNumber === undefined ? '' : '/' + challengeNumber

			var promise = $http({
				method: 'GET',
				url: 'http://picstar.dev/api/challenge/' + challengeType + urlAdding,
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			});
			return promise;
		}




}]);