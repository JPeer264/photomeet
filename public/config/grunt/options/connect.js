/**
 * Grunt task options for:
 * connect
 */

module.exports = {
    dev: {
        options: {
            port: '<%=config.port%>',
            base: '<%=paths.tmp.base%>',
            open: true,
            livereload: '<%= config.livereload %>'
        }
    },
    docs: {
        options: {
            port: '<%=config.port%>',
            base: '<%=paths.tmp.base%>/docs',
            open: true,
            livereload: '<%= config.livereload %>'
        }
    },
    test: {
        options: {
            port: '<%=config.port%>',
            base: '<%=paths.tmp.test%>/coverage',
            open: true,
            livereload: '<%= config.livereload %>'
        }
    }
};
