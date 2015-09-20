/**
* pages.challenges Module
*
* Description
*/
angular
	.module('pages.challenges')
	.controller('challengeController', ['$scope', 'challengeService', '$stateParams', function ($scope, challengeService, $stateParams) {
		// $scope.test = $stateParams;
		challengeService.getChallenges($stateParams.challengeType)
			.success(function(data) {
				for (var index in data) {
					data[index].challengeType = $stateParams.challengeType;
				}

				$scope.challenges = data;
			});
	}]);