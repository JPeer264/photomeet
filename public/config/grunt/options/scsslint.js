/**
 * Grunt task options for:
 * scsslint
 */
module.exports = {
    options: {
        config: '<%=paths.config%>/scsslint/scss-lint.yml',
        reporterOutput: '<%=paths.tmp.base%>/scsslint.xml'
    },
    report: {
        src: '<%=paths.src.scssFiles%>'
    },
};
