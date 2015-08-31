/**
 * Grunt task options for:
 * csslint
 */
module.exports = {
	options: {
		csslintrc: '<%=paths.config%>/csslint/rules.json'
	},
	test: {
		options: { },
		src: '<%=paths.tmp.styles%>'
	}
};
