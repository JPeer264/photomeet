/**
 * Grunt task options for:
 * jscs
 */

module.exports = {
    test: {
        options: {
            config: '<%=paths.config%>/jscs/jscs.json',
            fix: true,
        },
        files: {
            src: ['<%=paths.src.jsFiles%>', '<%=paths.src.notests%>'],
        },
    },
};
