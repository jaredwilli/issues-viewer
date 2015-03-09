'use strict';

/**
 * @ngdoc function
 * @name issuesViewer.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the issuesViewer
 */
angular.module('issuesViewer')
.controller('MainCtrl', [
  '$scope',
  '$location',
  'issuesService',
  'issues',
  'totalResults',
  'trimIssues',
  function($scope, $location, issuesService, issues, totalResults, trimIssues) {
    $scope.repo = 'rails/rails';

    $scope.issues = issues.data;
    trimIssues.trim($scope.issues);


    $scope.paging = {};
    $scope.paging.startIndex = 1;
    $scope.paging.endIndex = 30;
    $scope.paging.perPage = 30;
    $scope.paging.totalCount = totalResults.data.length;
    $scope.paging.totalPages = Math.ceil($scope.paging.totalCount / $scope.paging.perPage);
    $scope.paging.firstPage = 1;
    $scope.paging.lastPage = $scope.paging.totalPages;
    $scope.paging.currentPage = 1;
    $scope.paging.prevPage = $scope.paging.currentPage - 1;
    $scope.paging.nextPage = $scope.paging.currentPage + 1;


    $scope.getRepo = function() {
      issuesService.list(1, 30, $scope.repo).success(function(resp) {
        $scope.issues = resp;
        trimIssues.trim($scope.issues);
      });

      issuesService.getAll($scope.reop).success(function(resp) {
        $scope.totalCount = resp.length
      });
    };

    $scope.movePage = function(page) {
      $scope.paging.currentPage = page;
      $scope.paging.startIndex = ((page - 1) * $scope.paging.perPage) + 1;
      $scope.paging.endIndex = Math.min($scope.paging.totalCount, $scope.paging.perPage * page);

      // Update issues list
      issuesService.list(page).success(function(resp) {
        $scope.issues = resp;
        trimIssues.trim($scope.issues);
      });

    };

    $scope.prevPage = function() {
      $scope.movePage($scope.paging.currentPage - 1);
    };

    $scope.nextPage = function() {
      $scope.movePage($scope.paging.currentPage + 1);
    };

    $scope.range = function(n) {
      var a = [];
      for (var i = 1; i <= n; ++i) {
          a.push(i);
      }
      return a;
    };


}])

.service('trimIssues', function() {
  this.trim = function(issues) {
    // Trim issue titles
    return issues.forEach(function(i) {
      var trimTitle = i.title.substr(0, 140);
      i.title = trimTitle.substr(0, Math.min(trimTitle.length, trimTitle.lastIndexOf(' '))) + '...';
      return i;
    });
  };
});

