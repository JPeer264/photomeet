/**
 * Grunt task options for:
 * json2js
 */
module.exports = {
    test: {
        options: {
            // // strip this from the file path
            stripPrefix: './.tmp',

            // // prepend this to the
            // prependPrefix: 'served/'
        },
        files: [{
            src: ['<%=paths.tmp.assets%>/json/**/*.json'],
            dest: '<%=paths.tmp.test%>/js/json.js'
        }],
    }
};
