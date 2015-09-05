angular
	.module('pages.index', ['cmps'])
	.controller('indexController', indexController);

indexController.$inject = [
	'$scope',
	'challengeService'
];

function indexController($scope, challengeService) {

	challengeService.getChallenges('weekly').then(function(data) {

		// append challengeType for later includes
		for (var key of data.data) {
			key.challengeType = "weekly";
		}

		$scope.latestWeekly = data.data.splice(1, 6);

		// fast workaround to get 1 element
		var newArray = new Array();
		newArray.push(data.data[0])
		$scope.lastWeekly = newArray;
		
	});

	challengeService.getChallenges('monthly').then(function(data) {

		// append challengeType for later includes
		for (var key of data.data) {
			key.challengeType = "monthly";
		}

		$scope.latestMonthly = data.data.splice(1, 5);

		// fast workaround to get 1 element
		var newArray = new Array();
		newArray.push(data.data[0])
		$scope.lastMonthly = newArray;

	});

	$scope.rowCounter = function(count) {
		console.log(count);
	}
}