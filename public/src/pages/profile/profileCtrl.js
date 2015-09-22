/**
* pages.login Module
*
* Description
*/
angular.module('pages.profile')
	.controller('profileCtrl', ['$scope', 'userService', function ($scope, userService) {


		userService.getUserData('jn').then(function(data) {
			$scope.user = data.data;
		});

	}])