/**
 * Grunt task options for:
 * uglify
 */
module.exports = {
    options: {

    },
    prod: {
        options:
        {

        },
        files: [{
            expand: true,
            cwd: '<%=paths.tmp.js%>',
            src: [
                '*.module.js',
                '**.js',
                '!_*.js',
            ],
            dest: '<%=paths.dest.js%>',
            ext: '.min.js',
        }]
    }
};
