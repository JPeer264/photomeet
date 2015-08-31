/**
 * Grunt task options for:
 * validation
 */
module.exports = {
    options: {
        failHard: true,
        stoponerror: false,
        reset: true,
        reportpath: '<%=paths.tmp.base%>/validation-status.json',
        serverUrl: 'http://validator.test.dmc.de/check',
        // proxy: 'http://proxy.intra.dmc.de:3128',
        relaxerror: [
            // TODO: resolve
            'Any button descendant of a label element with a for attribute must have an ID value that matches that for attribute.',

            // relax custom elements
            'Element [-a-zA-Z]+ not allowed as child of element [-a-zA-Z]+ in this context',

            // informational statements from validator
            'The Content-Type was text/html. Using the HTML parser.',
            'Using the schema for HTML with SVG 1.1, MathML 3.0, RDFa 1.1, and ITS 2.0 support.'
        ],
        wrapfile: '<%=paths.config%>/validation/html5-wrapper.html'
    },
    components: {
        src: '<%=paths.src.htmlFiles_noindex%>'
    },
    index: {
        options: {
            wrapfile: false,
            reportpath: '<%=paths.tmp.base%>/validation-status.json'
        },
        src: [
            '<%=paths.src.base%>/**.html'
        ]
    }
};
