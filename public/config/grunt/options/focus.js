/**
 * Grunt task options for:
 * focus
 */
module.exports = {
    dev: {
        include: [
            'config',
            'sass',
            'js',
            'html'
        ]
    },
    docs: {
        include: [
            'js',
            'config',
            'docs'
        ]
    },
    test: {
        include: [
            'js',
            'config',
            'test',
            'html'
        ]
    }
};
