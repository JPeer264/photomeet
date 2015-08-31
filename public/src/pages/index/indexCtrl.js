angular
	.module('pages.index', ['cmps'])
	.controller('indexController', indexController);

indexController.$inject = [
	'$scope',	
];

function indexController($scope) {

	$scope.user = "Jan Peer";

}