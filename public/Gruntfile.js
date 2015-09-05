/**
 * Load configuration files for Grunt
 * @param {string} path Path to folder with tasks
 * @return {object} All options
 */
module.exports = function(grunt) {
    function loadConfig(path) {
        var glob = require('glob');
        var object = {};
        var key;

        glob.sync('*', {cwd: path}).forEach(function (option) {
            key = option.replace(/\.js$/, '');
            object[key] = require(path + option);
        });

        return object;
    }

    require('time-grunt')(grunt);

    require('jit-grunt')(grunt, {
        removelogging: 'grunt-remove-logging',
        validation: 'grunt-html-validation',
        mocha: 'grunt-mocha-phantom-istanbul',
        json2js: 'grunt-angular-json2js',
        instrument: 'grunt-istanbul',
        scsslint: 'grunt-scss-lint',
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: {
            livereload: 35678,
        },
        paths: {
            base: '.',
            tmp: {
                base: '<%=paths.base%>/tmp',
                assets: '<%=paths.tmp.base%>/assets',
                js: '<%=paths.tmp.assets%>/js',
                svg: '<%=paths.tmp.assets%>/svg',
                svg_sprite: '<%=paths.tmp.svg%>/sprite.svg',
                sass: '<%=paths.tmp.assets%>/scss/styles.scss',
                styles: '<%=paths.tmp.assets%>/css/styles.css',
                css: '<%=paths.tmp.assets%>/css',
                csss: '<%=paths.tmp.css%>/**.css',
                test: '<%=paths.tmp.base%>/test'
            },
            dest: {
                base: '<%=paths.base%>/dist',
                assets: '<%=paths.dest.base%>/assets',
                js: '<%=paths.dest.assets%>/js',
                css: '<%=paths.dest.assets%>/css',
                svg: '<%=paths.dest.assets%>/svg',
                svg_sprite: '<%=paths.dest.svg%>/sprite.svg',
            },
            src: {
                base: '<%=paths.base%>/src',
                assets: '<%=paths.src.base%>/assets',
                img: '<%=paths.src.assets%>/img',
                imgs: '<%=paths.src.img%>/**/*.{gif|jpg|jpeg|png}',
                svg: '<%=paths.src.assets%>/svg',
                svgs: '<%=paths.src.svg%>/**/*.svg',
                cmp: '<%=paths.src.base%>/components',
                cmps: '<%=paths.src.cmp%>/**',
                core: '<%=paths.src.base%>/core',
                cores: '<%=paths.src.core%>/**',
                page: '<%=paths.src.base%>/pages',
                pages: '<%=paths.src.page%>/**',
                ui: '<%=paths.src.base%>/ui',
                uis: '<%=paths.src.ui%>/**',
                provider: '<%=paths.src.base%>/provider',
                providers: '<%=paths.src.provider%>/**',
                notests: [
                    '!<%=paths.src.cmps%>/*.spec.js',
                    '!<%=paths.src.cores%>/*.spec.js',
                    '!<%=paths.src.pages%>/*.spec.js',
                    '!<%=paths.src.uis%>/*.spec.js',
                    '!<%=paths.src.providers%>/*.spec.js',
                ],
                tests: [
                    '<%=paths.src.cmps%>/*.spec.js',
                    '<%=paths.src.cores%>/*.spec.js',
                    '<%=paths.src.pages%>/*.spec.js',
                    '<%=paths.src.uis%>/*.spec.js',
                    '<%=paths.src.providers%>/*.spec.js',
                ],
                testsRelative: ['*/**.spec.js', '*.spec.js', '**.spec.js'],
                js: '<%=paths.src.assets%>/js',
                jss: '<%=paths.src.js%>/**.js',
                jsFiles: [
                    '<%=paths.src.jss%>',
                    '<%=paths.src.cmps%>/**.js',
                    '<%=paths.src.cores%>/**.js',
                    '<%=paths.src.pages%>/**.js',
                    '<%=paths.src.uis%>/**.js',
                    '<%=paths.src.providers%>/**.js',
                    '!<%=paths.src.js%>/_*.js',
                ],
                jsFiles_notests: [
                    '<%=paths.base%>/src/**/*.module.js',
                    '!<%=paths.src.core%>/rccTestHelper/*.module.js',
                    '<%=paths.src.jss%>',
                    '<%=paths.src.cmps%>/**.js',
                    '<%=paths.src.cores%>/**.js',
                    '<%=paths.src.pages%>/**.js',
                    '<%=paths.src.uis%>/**.js',
                    '<%=paths.src.providers%>/**.js',
                    '!<%=paths.src.js%>/_*.js',
                    '!<%=paths.src.cmps%>/*.spec.js',
                    '!<%=paths.src.cores%>/*.spec.js',
                    '!<%=paths.src.pages%>/*.spec.js',
                    '!<%=paths.src.uis%>/*.spec.js',
                    '!<%=paths.src.providers%>/*.spec.js',
                    '!<%=paths.src.core%>/rccTestHelper/**',
                ],
                scssApp: [
                    '<%=paths.src.cmps%>/*.scss',
                    '<%=paths.src.cores%>/**.scss',
                    '<%=paths.src.pages%>/**.scss',
                    '<%=paths.src.uis%>/**.scss',
                ],
                scssFiles: [
                    '<%=paths.src.cmps%>/**.scss',
                    '<%=paths.src.cores%>/**.scss',
                    '<%=paths.src.pages%>/**.scss',
                    '<%=paths.src.uis%>/**.scss',
                    '<%=paths.src.assets%>/scss/**.scss',

                    // 'bower_components/{bootstrap-sass}/**.scss'
                ],
                htmlFiles: [
                    '<%=paths.src.cmps%>/**.html',
                    '<%=paths.src.cores%>/**.html',
                    '<%=paths.src.pages%>/**.html',
                    '<%=paths.src.uis%>/**.html',
                    '<%=paths.src.base%>/*.html',
                ],
                htmlFiles_noindex: [
                    '<%=paths.src.cmps%>/**.html',
                    '<%=paths.src.cores%>/**.html',
                    '<%=paths.src.pages%>/**.html',
                    '<%=paths.src.uis%>/**.html',
                    '!<%=paths.src.base%>/*.html',
                ],
            },
            config: '<%=paths.base%>/config',
        },
    });

    grunt.config.merge(loadConfig(grunt.config('paths')['config'] + '/grunt/options/'));
    grunt.loadTasks(grunt.config('paths')['config'] + '/grunt/tasks');
};
