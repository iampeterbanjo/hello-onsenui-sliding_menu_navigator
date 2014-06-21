(function () {
	'use strict';

	// Define the directive on the module.
	// Inject the dependencies. 
	// Point to the directive definition function.
	angular.module('myApp').directive('appVersion', ['version', function (version) {
		return function (scope, element, attrs) {
			element.text(version)
		}
	}])
})();