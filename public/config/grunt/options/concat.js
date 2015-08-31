/**
 * Grunt task options for:
 * concat
 */

function processJS(src, filepath)
{
    return "// Source: " + filepath + "\n" +
        (filepath.indexOf('_intro') === -1 ? ";(function( window, jQuery, angular, undefined ){ \n 'use strict';\n\n":"") +
        src +
        (filepath.indexOf('_intro') === -1 ? "\n\n}( window, jQuery, angular ));":"");
}

module.exports = {
    options: {},
    js:
    {
        options: { process: processJS },
        files:
        {
            // concat for libs now in bower_concat
            // '<%=paths.tmp.js%>/vendor.js': [
            //     '<%=paths.src.js%>/_intro.js',
            //     'bower_components/jquery/dist/jquery.js',
            //     'bower_components/angular/angular.js',
            //     'bower_components/angular-local-storage/dist/angular-local-storage.js',
            //     'bower_components/angular-ui-router/release/angular-ui-router.js',
            //     'bower_components/angular-translate/angular-translate.js',
            //     'bower_components/lodash/dist/lodash.compat.js'
            // ],
            '<%=paths.tmp.js%>/app.js': '<%=paths.src.jsFiles_notests%>',
        },
    },
    lib:
    {
        files:
        {
            '<%=paths.tmp.js%>/vendor.js': [
                '<%=paths.src.js%>/_intro.js',
                '<%=paths.tmp.js%>/vendor.js',
            ]
        },
    },
    sass:
    {
        files: {
            '<%=paths.tmp.assets%>/scss/app.scss': '<%=paths.src.scssApp%>',
        },
    },
    test: {
        options: { process: processJS },
        files: {
            '<%=paths.tmp.base%>/test/js/tests.js': '<%=paths.src.tests%>',
            '<%=paths.tmp.test%>/js/app.js': [
                '<%=paths.tmp.test%>/js_instrumented/**/*.module.js',
                '<%=paths.tmp.test%>/js_instrumented/**/*.js'
            ]
        }
    }
};
