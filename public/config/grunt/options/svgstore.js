/**
 * Grunt task options for:
 * svgstore
 */
module.exports = {
    options:
    {
        prefix : '', // This will prefix each ID
        svg:
        { // will add and overide the the default xmlns="http://www.w3.org/2000/svg" attribute to the resulting SVG
            viewBox : '0 0 100 100',
            xmlns: 'http://www.w3.org/2000/svg'
        },
        cleanupdefs: true,
        cleanup: ['fill'],
        formatting : {
            indent_size : 2
        },
        includedemo:
            '<!doctype html>' +
            '<html>' +
                '<head>' +
                    '<style>svg { width:100px; height:100px; fill:black !important; border: 1px solid gray; }</style>' +
                    '{{{svg}}}' +
                '</head>' +
                '<body>' +
                    '{{#each icons}}<span title="{{name}}"><svg><use xlink:href="#{{name}}" /></svg> </span> {{/each}}' +
                '</body>' +
            '</html>'
    },
    dev:
    {
        files:
        {
            '<%=paths.tmp.svg_sprite%>': '<%=paths.src.svgs%>',
        }
    }
};
