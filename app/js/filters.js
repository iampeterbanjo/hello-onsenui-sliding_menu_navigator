(function() {
    'use strict';

    // Define the directive on the module.
    // Inject the dependencies. 
    // Point to the filter definition function.
    angular.module('myApp').filter('filters', ['$window', filter]);
    
    function filter ($window) {
        // Usage:
        // 
        // Creates:
        // 
        var filter = {
            link: link,
            restrict: 'A'
        };
        return filter;

        function link(scope, element, attrs) {
        }
    }

})();