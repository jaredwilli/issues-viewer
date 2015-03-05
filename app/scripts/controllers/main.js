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
  function($scope, $location, issuesService, issues, totalResults) {
    $scope.issues = issues.data;
console.log(totalResults);

    $scope.issues.forEach(function(i) {
      var trimTitle = i.title.substr(0, 140);
      i.title = trimTitle.substr(0, Math.min(trimTitle.length, trimTitle.lastIndexOf(' '))) + '...';

      return i;
    });


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


    $scope.movePage = function(page) {
      $scope.paging.currentPage = page;
      $scope.paging.startIndex = ((page - 1) * $scope.paging.perPage) + 1;
      $scope.paging.endIndex = Math.min($scope.paging.totalCount, $scope.paging.perPage * page);

      // Update issues list
      issuesService.list(page).success(function(resp) {
        $scope.issues = resp;
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


}]);
