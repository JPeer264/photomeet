/**
 * Grunt task options for:
 * cdnify
 */
module.exports = {
    prod: {
        options: {
            rewriter: function (url) 
            {
                var arr = url.split('.'); 
                arr.splice((arr.length - 1), 0, 'min');
                return arr.join('.');
            },
            css: false,
            html: {
                'img[src]': false,
                'video[poster]': false,
                'source[src]': false
            }
        },
        files: [{ 
            expand: true,
            cwd: '<%=paths.tmp.base%>',
            src: ['*.html'],
            dest: '<%=paths.dest.base%>'
        }]
    }
};
