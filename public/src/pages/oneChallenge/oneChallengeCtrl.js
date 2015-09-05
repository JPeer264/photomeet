/**
* pages.oneChallenge Module
*
* Description
*/
angular
	.module('pages.oneChallenge')
	.controller('oneChallengeCtrl', ['$scope', '$stateParams', 'challengeService', function ($scope, $stateParams, challengeService) {
		console.log($stateParams);

		challengeService.getChallenges($stateParams.challengeType, $stateParams.challengeID).then(function(data) {

			if (data.data.length === 0) {
				$scope.entrys = "No entrys yet.";
				return;
			} 

			$scope.entrys = data.data;
			
		});

		challengeService.getChallenges($stateParams.challengeType).then(function(data) {

			for (var key of data.data) {

				if (key.id.toString() === $stateParams.challengeID) {

					if (key.img === false) {
						key.img = "http://cdn9.howtogeek.com/wp-content/uploads/2012/05/oceanwaveswallpapercollection07.jpg";
					} 

					$scope.challenge = key;
				}	
			}
		});

	}])