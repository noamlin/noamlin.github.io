module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		nunjucks: {
			precompile: {
				baseDir: 'views/',
				src: 'views/*',
				dest: 'pages/template.js',
				options: {
					env: require('./index.js'),
					name: function(filename) {
						return 'foo/' + filename;
					}
				}
			}
		}
	});

	// Load the plugin
	grunt.loadNpmTasks('grunt-nunjucks');

	// Default task(s)
	grunt.registerTask('default', ['nunjucks']);
};