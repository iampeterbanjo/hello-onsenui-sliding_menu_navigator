(function () {
    'use strict';

    angular.module('myApp').controller('TaskListCtrl', function ($scope) {
    	$scope.tasks = [
				{ title: 'Get the milk' }
				, { title: 'Travel lightly' }
				, { title: 'Buy groceries' }
				, { title: 'Clean house' }
				, { title: 'Delete files' }
    	]
    });
})();
