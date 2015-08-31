/**
 * Grunt task options for:
 * postcss
 */
module.exports = {
    options: {
        map: true,
        processors: [
            require('autoprefixer-core')({browsers: ['last 1 version']})
        ]
    },
    prefix: {
        src: '<%=paths.tmp.csss%>'
    }
};
