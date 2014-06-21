(function () {
	'use strict';

	// Define the filters on the module.
	// Inject the dependencies. 
	// Point to the filter definition function.
	angular.module('myApp').filter('interpolate', ['version', function (version) {
		return function (text) {
			return String(text).replace(/\%VERSION\%/mg, version)
		}
	}])
})();