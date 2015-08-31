/**
 * Grunt task options for:
 * html2js
 */

module.exports = {
    options: {
        htmlmin: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
        },
        module: '<%= pkg.name %>.templates',
        singleModule: true,
    },
    dev: {
        src: ['<%=paths.src.pages%>/**.html', '<%=paths.src.cmps%>/*.html'],
        dest: '<%=paths.tmp.js%>/templates.js',
    },
};
