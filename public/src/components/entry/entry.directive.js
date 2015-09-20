/**
* joinDirective Module
*
* Description
*/
angular
	.module('cmps.entry', [])
	.directive('entry', [function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {
		// 	at: '@',
		// 	and: '&',
		// 	eq: '=',
		// }, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope) 		},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'components/entry/entry.html',
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			// console.log(iAttrs);
			$scope.entryID = iAttrs.entry;
		}
	};
}]);