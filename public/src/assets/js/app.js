angular.module('PicStar', [
    'ui.router',
    'LocalStorageModule',
    'PicStar.templates',
    'pages',
    'services',
    'cmps',
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
                .state('allChallenges', {
                    url: '/challenge',
                    views: {
                        header: {
                            templateUrl: headerTemplateURL,
                            controller: headerController
                        },
                        // main: {
                        //     templateUrl: 'pages/challenges/challenges.html',
                        //     controller: 'challengeController'
                        // },
                        footer: {
                            templateUrl: footerTemplateURL,
                            controller: footerController
                        }
                    }
                })
                .state('challengeTypes', {
                    url: '/challenge/:challengeType',
                    views: {
                        header: {
                            templateUrl: headerTemplateURL,
                            controller: headerController
                        },
                        main: {
                            templateUrl: 'pages/challenges/challenges.html',
                            controller: 'challengeController'
                        },
                        footer: {
                            templateUrl: footerTemplateURL,
                            controller: footerController
                        }
                    }
                })
                .state('challenge', {
                    url: '/challenge/:challengeType/{challengeID}',
                    views: {
                        header: {
                            templateUrl: headerTemplateURL,
                            controller: headerController
                        },
                        main: {
                            templateUrl: 'pages/oneChallenge/oneChallenge.html',
                            controller: 'oneChallengeCtrl'
                        },
                        footer: {
                            templateUrl: footerTemplateURL,
                            controller: footerController
                        }
                    }
                })
                .state('login', {
                    url: '/login',
                    views: {
                        header: {
                            templateUrl: headerTemplateURL,
                            controller: headerController
                        },
                        main: {
                            templateUrl: 'pages/login/login.html',
                            controller: 'loginCtrl'
                        },
                        footer: {
                            templateUrl: footerTemplateURL,
                            controller: footerController
                        }
                    }
                })
                .state('profile', {
                    url: '/{profileID}',
                    views: {
                        header: {
                            templateUrl: headerTemplateURL,
                            controller: headerController
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
