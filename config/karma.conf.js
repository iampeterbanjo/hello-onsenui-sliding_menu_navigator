module.exports = function(config) {
	config.set({
		basePath: '../'

		, files: [
			'app/lib/onsen/js/angular/angular.js'
			, 'app/lib/onsen/js/angular/angular-*.js'
			, 'app/lib/onsen/js/onsenui.js'
			, 'test/lib/angular/angular-mocks.js'
			, 'app/js/**/*.js'
			, 'test/unit/**/*.js'
		]

		, frameworks: ['jasmine']

		, autoWatch: true

		//, browsers: ['PhantomJS']
		, browsers: ['Chrome']

		, junitReporter: {
			outputFile: 'test_out/unit.xml'
			, suite: 'unit'
		}
		
		, plugins: [
			'karma-jasmine',
			, 'karma-phantomjs-launcher'
			, 'karma-chrome-launcher'
			, 'karma-firefox-launcher'
			, 'karma-ie-launcher'
			, 'karma-safari-launcher'
			, 'karma-opera-launcher'
			, 'karma-coffee-preprocessor'
    ]
	})
}