/**
* cmps.challenges Module
*
* Description
*/
angular.module('cmps.challenge', []).
directive('challenge', [function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {
		// 	challengeType: '=',
		// }, // {} = isolate, true = child, false/undefined = no change
		// controller: challenges,
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'components/challenge/challenge.html',
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ 
		// 	return function linking(scope, elm, attrs){
		// 		console.log(tAttrs);
		// 	}
		// })),
		link: function($scope, iElm, iAttrs, controller) {
		}
	};
}]);