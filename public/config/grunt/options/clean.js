/**
 * Grunt task options for:
 * clean
 */

module.exports = {
    dev: {
        files: [
            { src: '<%=paths.tmp.base%>' }
        ]
    },
    test: {
        files: [
            { src: '<%=paths.tmp.base%>' }
        ]
    },
    prod: {
        files: [
            { src: '<%=paths.dest.base%>' }
        ]
    }
};
