/**
 * Grunt task options for:
 * mocha
 */
module.exports = {
    test: {
        src: ['<%=paths.tmp.test%>/index.html'],
        options: {
            reporter: 'Spec',
            log: true,
            logErrors: true,
            run: true,
            coverage: {
                htmlReport: '<%=paths.tmp.test%>/coverage',
                coberturaReport: '<%=paths.tmp.test%>/coverage'
            }
        }
    },
};
