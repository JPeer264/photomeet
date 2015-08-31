/**
 * Grunt task options for:
 * jshint
 */
module.exports = {
    options: {
        jshintrc: '<%=paths.config%>/jshint/.jshintrc'
    },
    test: '<%=paths.src.jsFiles_notests%>'
};
