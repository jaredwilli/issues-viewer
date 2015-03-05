'use strict';

/**
 * @ngdoc function
 * @name issuesViewer.controller:IssueCtrl
 * @description
 * # IssueCtrl
 * Controller of the issuesViewer
 */
angular.module('issuesViewer')
.controller('IssueCtrl', [
  '$scope',
  'issues',
  'comments',
  function($scope, issues, comments) {
    $scope.issue = issues.data;
    $scope.comments = comments.data;

}]);
