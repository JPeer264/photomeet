/**
 * Grunt task options for:
 * tasks
 */
module.exports = {
    default: ['build:prod'],
    test: ['build:test'],
    options:
    {
        sassTasks: [
            'concat:sass',
            'sass:dev'
        ],
        htmlTasks: [
            'copy:html',
            'html2js:dev'
        ]
    },
    build:
    {
        options: {
            default: 'prod'
        },
        docs: ['ngdocs'],
        test: [
            'clean:test',
            'build:dev',
            'copy:test',
            'json2js',
            'instrument',
            'concat:test',
            // 'jscs:test',
            // 'jshint:test',
            'csslint:test',
            'validation:index',
            'validation:components',
            'mocha'
        ],
        dev: [
            'clean:dev',
            'copy:dev',
            'svgstore:dev',
            '<%=tasks.options.htmlTasks%>',
            '<%=tasks.options.sassTasks%>',
            'concat:js',
            'bower_concat',
            'concat:lib',
        ],
        prod: [
            'build:dev',
            'clean:prod',
            'copy:prod',
            'removelogging:prod',
            'uglify:prod',
            'cssmin:prod',
            'cdnify:prod'
        ]
    },
    serve:
    {
        options: {
            preTasks: ['build'],
            postTasks: ['connect', 'focus'],
            default: 'dev'
        },
        test: [],
        dev: [],
        docs: []
    }
};

