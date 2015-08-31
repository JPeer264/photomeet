angular.module('PicStar', [
    'ui.router',
    'LocalStorageModule',
    'PicStar.templates',
    'pages',
    'services',
    'cmps'
]);
angular
    .module('PicStar')
    .config([
        '$stateProvider',
        '$locationProvider',
        '$urlRouterProvider',
        'localStorageServiceProvider',
        function($stateProvider, $locationProvider, $urlRouterProvider, localStorageServiceProvider) {
            //redirect to home state when we call the page without route information

                // header
            var headerTemplateURL = 'pages/header/header.html',
                headerController = 'headerController',

                // footer
                footerTemplateURL = 'pages/footer/footer.html',
                footerController = 'footerController';

            $locationProvider.html5Mode(true);

            $urlRouterProvider.when('', '/');

            $stateProvider
                .state('index', {
                    url: '/',
                    views: {
                        header: {
                            templateUrl: headerTemplateURL,
                            controller: headerController
                        },
                        main: {
                            templateUrl: 'pages/index/index.html',
                            controller: 'indexController',
                        },
                        footer: {
                            templateUrl: footerTemplateURL,
                            controller: footerController
                        }
                    }
                })
                .state('challenge', {
                    url: '/challenge',
                    views: {
                        header: {
                            templateUrl: headerTemplateURL,
                            controller: headerController
                        },
                        main: {
                            templateUrl: 'pages/somePage/somePage.html',
                            controller: 'someController'
                        },
                        footer: {
                            templateUrl: footerTemplateURL,
                            controller: footerController
                        }
                    }
                });

            localStorageServiceProvider
                .setPrefix('PicStar')
                .setStorageType('localStorage');
        },

    ]);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['PicStar']);
});
