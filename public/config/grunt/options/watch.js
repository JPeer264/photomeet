/**
 * Grunt task options for:
 * watch
 */
module.exports = {
    config:
    {
        options: {
            reload: true,
            livereload: '<%= config.livereload %>'
        },
        files: [
            'Gruntfile.js',
            '<%=paths.config%>/grunt/**/*.js'
        ],
        tasks: ['build:dev']
    },
    sass: {
        options: { livereload: '<%= config.livereload %>' },
        files: [
            '<%=paths.src.scssFiles%>'
        ],
        tasks: '<%=tasks.options.sassTasks%>'
    },
    js: {
        options: { livereload: '<%= config.livereload %>' },
        files: [
            '<%= paths.src.jsFiles %>'
        ],
        tasks: [
            'concat:js'
        ]
    },
    html: {
        options: { livereload: '<%= config.livereload %>' },
        files: [
            '<%= paths.src.htmlFiles %>'
        ],
        tasks: '<%=tasks.options.htmlTasks%>'
    },
    docs: {
        options: { livereload: '<%= config.livereload %>' },
        files: [
            'docs/**/*.ngdoc'
        ],
        tasks: ['ngdocs']
    },
    test: {
        options: { livereload: '<%= config.livereload %>' },
        files: [
            '<%= paths.src.tests %>'
        ],
        tasks: ['build:test']
    }

};


