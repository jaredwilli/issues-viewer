'use strict';

/**
 * @ngdoc directive
 * @name issuesViewer.directive:pagination
 * @description
 * # pagination
 */
angular.module('issuesViewer')
  .directive('pagination', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/pagination.html'
    };
  });
