/**
 * Grunt task options for:
 * ngdocs
 */
module.exports = {
    options: {
        dest: '<%=paths.tmp.base%>/docs',
        scripts: [
            '<%=paths.tmp.js%>/vendor.js',
            '<%=paths.tmp.js%>/templates.js',
            '<%=paths.tmp.js%>/app.js',
            'bower_components/angular-animate/angular-animate.js',
        ],
        html5Mode: false,
        animation: false,
        startPage: '/api',
        styles: [
            '<%=paths.tmp.styles%>',
            '<%=paths.config%>/ngdoc/ngdoc-extra.css'
        ],
        title: "<%= pkg.name %>",
        image: "http://www.dmc.de/wp-content/uploads/2013/10/logo_dmc_regular1.png",
        bestMatch: true
    },
    api: {
        src: '<%=paths.src.jsFiles_notests%>',
        title: 'Documentation',
        api: true
    },
    guide: {
     src: [
         'docs/**/*.ngdoc'
     ],
     title: 'Guide'
    }
};
