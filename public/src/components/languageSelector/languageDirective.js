/**
 * @ngdoc directive
 * @name rcc.directive:languageSelector
 * @module rcc.directive
 *
 * @requires $translate
 *
 * @restrict E
 * @element ANY
 * @scope
 *
 * @param {string} locale The locale string e.g. de_DE to use.
 *
 * @description
 * # languageSelector
 * Shows a language selector for changing languages in the UI
 *
 */
angular.module('cmps.languageSelector').directive('languageselector', ['$translate', function($translate) {
    return {
        restrict: 'E',
        scope: {
            locale: '@',
        },
        templateUrl: 'components/languageSelector/languageButton.html',
        link: function($scope) {

            /**
             * @ngdoc method
             * @name languageselector#changeLanguage
             * @methodOf rcc.directive:languageSelector
             * @description
             * changes the language setting application wide based on the locale attribute of the directive.
             *
             */
            $scope.changeLanguage = function() {
                $translate.use($scope.locale);
            };
        },
    };
},

]);
