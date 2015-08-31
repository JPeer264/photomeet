/**
 * Grunt task options for:
 * sass
 */
module.exports = {
    dev: {
        options: {
            sourceMap: true
        },
        files: {
            '<%=paths.tmp.styles%>': '<%=paths.tmp.sass%>'
        }
    }
};