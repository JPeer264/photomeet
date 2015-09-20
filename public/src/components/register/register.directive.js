/**
* cmps.login Module
*
* Description
*/
angular.module('cmps.register', [])
	.directive('register', [function(){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude, authService) {
				$scope.submitRegister = function() {
					// console.log(!!$scope.user.password);
					var okBoo = false;

					if ($scope.user !== undefined && !!$scope.user.email && !!$scope.user.password) {
						okBoo = true;
					}
					
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
					}
				};
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: 'components/register/register.html',
			replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
			}
		};
	}]);