(function () {
    'use strict';

    // Controller name is handy for logging
    var controllerId = 'controller';

    // Define the controller on the module.
    // Inject the dependencies. 
    // Point to the controller definition function.
    angular.module('myApp').controller(controllerId,
        ['$scope', ['onsen.directives'], controller]);

    function controller($scope) {
        // Bindable properties and functions are placed on vm.
        $scope.title = 'controller';
        $scope.activate = activate;

        function activate() {
        }

        //#region Internal Methods        

        //#endregion
    }
})();
