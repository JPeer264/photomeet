/**
 * Grunt task options for:
 * bower_concat
 */
function processJS(src)
{
    var returnval = "\n" +
        ";(function( window, jQuery, angular, undefined ){ \n 'use strict';\n\n" +
        src +
        "\n\n}( window, jQuery, angular ));";

    return returnval;
}

module.exports = {
    all: {
        dest: '<%=paths.tmp.js%>/vendor.js',
        bowerOptions: {
            // relative: false
        },
        dependencies: {
            'angular': 'jquery'
        },
        process: processJS,
        callback: function(file, comp) { return file; }
    }
};
