/**
 * Grunt task options for:
 * csslint
 */
module.exports = {
    prod: {
        files: [{
            expand: true,
            cwd: '<%=paths.src.img%>/',
            src: ['**/*.{png,jpg,jpeg,gif}'],
            dest: '<%=paths.dest.img%>/'
        }]
    }
};
