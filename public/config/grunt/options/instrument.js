/**
 * Grunt task options for:
 * instrument
 */
module.exports = {
    files: '<%=paths.src.jsFiles_notests%>',
    options: {
        lazy: true,
        basePath: '<%=paths.tmp.test%>/js_instrumented/'
    }
};
