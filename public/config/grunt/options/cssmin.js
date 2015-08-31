/**
 * Grunt task options for:
 * cssmin
 */
module.exports = {
    options: {},
    prod: {
        options: {
            sourceMap: false
        },
        files: [{
            expand: true,
            cwd: '<%=paths.tmp.css%>',
            src: ['**.css'],
            dest: '<%=paths.dest.css%>',
            ext: '.min.css',
        }]
    }
};
