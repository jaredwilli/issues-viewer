'use strict';

/**
 * @ngdoc service
 * @name issuesViewer.Issues
 * @description
 * # Issues
 * Service in the issuesViewer.
 */
angular.module('issuesViewer')
.service('issuesService', [
  '$http',
  function($http) {
    var baseUrl = 'https://api.github.com/repos/';
    var baseRepo = 'rails/rails';

    this.list = function(page, perPage, repo) {
      perPage = perPage || 30;
      page = page || 1;
      repo = repo || baseRepo;

      return $http.get(baseUrl + repo + '/issues?page=' + page + '&per_page=' + perPage).success(function(resp) {
        return resp.data;
      });
    };

    this.get = function(number, repo) {
      repo = repo || baseRepo;

      return $http.get(baseUrl + repo + '/issues/' + number).success(function(resp) {
        return resp.data;
      });
    };

    this.getAll = function(repo) {
      repo = repo || baseRepo;

      return $http.get(baseUrl + repo + '/issues?per_page=1000').success(function(resp) {
        return resp;
      });
    };

    this.getComments = function(number, repo) {
      repo = repo || baseRepo;

      return $http.get(baseUrl + repo + '/issues/' + number + '/comments').success(function(resp) {
        return resp.data;
      });
    };

}]);
