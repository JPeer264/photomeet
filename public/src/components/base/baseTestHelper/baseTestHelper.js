(function(window, angular) {
    /**
     * @ngdoc overview
     * @module UBT.testHelper
     * @name UBT.testHelper
     *
     *
     * @description
     * # UBT.testHelper
     * Needs to be called before unit tests to safely provide the asynchronously created constant
     * INITIAL_BIZ_UI_CONFIG filled with some test data, otherwise initialization of the app
     * will miss due to a non-existing INITIAL_BIZ_UI_CONFIGProvider since the promise has not been
     * resolved when initializing the app - this only happens when doing unit tests, not in live environment
     */

    angular.module('UBT.testHelper', testHelper);

    testHelper.$inject = ['UBT.config', 'pascalprecht.translate'];

    function testHelper($configDataProvider, $provide) {
        //angular.module('UBT.testHelper', [
        //    'pascalprecht.translate',
        //function testHelper($provide) {
        $provide.constant('APP_CONTEXT', window.appContext);
        $provide.constant('INITIAL_BIZ_UI_CONFIG', {});
        $provide.constant('I18N', {});

        // Set data.source to "json" by default because we don't want to use base in unit tests
        $configDataProvider.set('data.source', 'json');

        // Provide a working server that returns JSON files
        $configDataProvider.set('data.server', 'http://localhost:8081');
        $configDataProvider.set('data.path', '');

        // Set an actual innerWidth to get the preconfigured viewport of app.js running
        window.innerWidth = 1920;

    }

    /**
     * @ngdoc property
     * @name UBT.testHelper#appContext
     * @methodOf UBT.testHelper
     *
     * @description
     * default appContext for unit tests
     */
    /* istanbul ignore next */
    if (typeof window.appContext === 'undefined') {
        window.appContext = {
            _process: 'UCri_qs',
            _country: 'DE',
            _language: 'de',
            _companyId: '',
            _outletId: '',
            _version: '1.0',
        };
    }

    /*
     * @ngdoc function
     * @name UBT.testHelper:createDirective
     * @module UBT.testHelper
     * @methodOf UBT.testHelper
     * @function
     *
     * @param {string} template  the template that should be compiled
     *
     * @description
     * Compiles and delivers a directive element
     * Credits to {@Link http://brianmcd.com/2014/10/18/helper-functions-for-unit-testing-angularjs.html Brian Mcdaniel}
     *
     * @returns {object}  Compiled directive
     */
    window.createDirective = function(template) {
        var elem;
        inject(function($compile, $rootScope) {
            elem = $compile(template)($rootScope);
            $rootScope.$digest();
        });

        return elem;
    };

    /*
     * @ngdoc function
     * @name UBT.testHelper:httpBackendResponse
     * @module UBT.testHelper
     * @methodOf UBT.testHelper
     * @function
     *
     * @requires json
     *
     * @param {string} jsonPath  URL to the JSON path that should be fetched
     *
     * @description
     * Fetches and returns the requested JSON file that is provided by angular.mock.module('json')
     * that itself is provided by Karma json2js. Creates an $httpBackend.whenGET call and puts the
     * JSON data in it
     *
     * @returns {void} void
     */
    window.httpBackendResponse = function(jsonPath) {
        // Create JSON path name the way that json2js uses
        var jsonName = jsonPath
            .replace(/http:\/\/([a-zA-Z])*(:[0-9]{2,5})?/, '')
            .replace(/\?.*/, '')
            .replace(/\.json$/, '')
            .replace(/(?:-|\/)([a-zA-Z0-9])/g, function(all, letter) {
                return letter.toUpperCase();
            });

        //inject(['$httpBackend', jsonName, function($httpBackend, content) {
        inject(['$httpBackend', function($httpBackend, content) {
            $httpBackend.whenGET(jsonPath).respond(content);
        }

        ]);
    };
})(window, window.angular);
