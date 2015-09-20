/**
* challengeService Module
*
* Description
*/
angular
	.module('services.challenge')
	.service('challengeService', ['$rootScope', '$http', function($rootScope, $http){

		/**
		 * @param challengeType   {String}
		 * @param challengeNumber {Integer}
		 *
		 * @return promise
		 */
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
		};

		/**
		 * Function which uploads new challenges
		 */
		this.upload = function() {

		};




}]);