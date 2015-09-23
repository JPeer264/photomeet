/**
* pages.login Module
*
* Description
*/
angular.module('pages.register')
	.controller('registerController', ['$scope', 'authService', function ($scope, authService) {
		$scope.submitRegister = function() {
			// console.log(!!$scope.user.password);
			var okBoo = false;

			if (!!$scope.user
					&& !!$scope.user.email 
					&& !!$scope.user.password 
					&& !!$scope.user.passwordProof) {
				okBoo = true;
			}

			console.log(!!$scope.user);
			
			if (okBoo) {
				authService.register($scope.user)
					.success(function(data) {
						console.log(data);
						// document.cookie = "TOKEN="+ data.token;
						// location.reload();
					})
					.error(function(err, data) {
						console.log(err);
						console.log(data);
					});				
			} else {
				console.log('no');
			}
		};
	}]);