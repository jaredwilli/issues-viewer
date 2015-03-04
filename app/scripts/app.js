'use strict';

/**
 * @ngdoc overview
 * @name issuesViewer
 * @description
 * # issuesViewer
 *
 * Main module of the application.
 */
angular.module('issuesViewer', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      resolve: {
        issues: ['issuesService', function(issuesService) {
          return issuesService.list();
        }],
        totalResults: ['issuesService', function(issuesService) {
          return issuesService.getAll();
        }]
      },
    })
    .when('/issue/:id', {
      templateUrl: 'views/issue.html',
      controller: 'IssueCtrl',
      resolve: {
        issues: ['$location', 'issuesService', function($location, issuesService) {
          return issuesService.get($location.path().split('/issue/')[1]);
        }],
        comments: ['$location', 'issuesService', function($location, issuesService) {
          // debugger;
          return issuesService.getComments($location.path().split('/issue/')[1]);
        }]
      },
    })
    .otherwise({
      redirectTo: '/'
    });
});
