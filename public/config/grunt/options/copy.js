/**
 * Grunt task options for:
 * copy
 */

module.exports = {
    dev: {
        files: [
            { expand: true, cwd: '<%=paths.src.assets%>/', src: ['**', '!**/_*.js', '!**/*.svg'], dest: '<%=paths.tmp.assets%>/' },
            { src: '<%=paths.tmp.svg%>/sprite-demo.html', dest: '<%=paths.tmp.base%>/sprite-demo.html' }
        ]
    },
    html: {
        files: [
            { expand: true, cwd: '<%=paths.src.base%>/', src: ['*.html'], dest: '<%=paths.tmp.base%>/' }
        ]
    },
    prod: {
        files: [
            { expand: true, cwd: '<%=paths.src.assets%>/', src: ['json/**'], dest: '<%=paths.dest.assets%>/' },
            { src: '<%=paths.tmp.svg_sprite%>', dest: '<%=paths.dest.svg_sprite%>' }
        ]
    },
    test: {
        files: [
            { src: '<%=paths.config%>/mocha/test.html', dest: '<%=paths.tmp.test%>/index.html' },
            { src: 'node_modules/grunt-mocha-phantom-istanbul/node_modules/mocha/mocha.js', dest: '<%=paths.tmp.test%>/js/mocha.js' },
            { src: 'node_modules/should/should.js', dest: '<%=paths.tmp.test%>/js/should.js' },
            { src: 'node_modules/grunt-mocha-phantom-istanbul/node_modules/mocha/mocha.css', dest: '<%=paths.tmp.test%>/css/mocha.css' },
        ]
    }
};
