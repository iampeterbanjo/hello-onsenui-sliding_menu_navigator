'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){

	var scope

	beforeEach(module('myApp'))

	beforeEach(inject(function ($rootScope) {
		scope = $rootScope.$new()
	}))

  it('should have a TaskListCtrl', inject(function($controller) {
  	var taskListCtrl = $controller('TaskListCtrl', { $scope: scope })
  	expect(taskListCtrl).toBeDefined()
		expect(scope.tasks.length).toBe(5)
  }))
});
