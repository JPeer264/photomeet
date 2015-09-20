angular
	.module('pages.index', ['cmps'])
	.controller('indexController', indexController);

indexController.$inject = [
	'$scope',
	'challengeService',
	'$stateParams'
];

function indexController($scope, challengeService, $stateParams) {
	challengeService.getChallenges('weekly').then(function(data) {

		// append challengeType for later includes
		for (var key of data.data) {
			key.challengeType = "weekly";
			key.content = false;
		}

		$scope.latestWeekly = data.data.splice(1, 4);
		// fast workaround to get 1 element
		var newArray = new Array();
		newArray.push(data.data[0]);
		$scope.lastWeekly = newArray;
		
	});

	challengeService.getChallenges('monthly').then(function(data) {

		// append challengeType for later includes
		for (var key of data.data) {
			key.challengeType = "monthly";
			key.content = false;
		}

		$scope.latestMonthly = data.data.splice(1, 4);

		// fast workaround to get 1 element
		var newArray = new Array();
		newArray.push(data.data[0]);
		$scope.lastMonthly = newArray;

	});

	$scope.rowCounter = function(count) {
		console.log(count);
	};
}