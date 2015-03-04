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
    var baseUrl = 'https://api.github.com/repos/GoogleChrome/devtools-docs/';


    // var obj = [{
    //   "url": "https://api.github.com/repos/GoogleChrome/devtools-docs/issues/255",
    //   "labels_url": "https://api.github.com/repos/GoogleChrome/devtools-docs/issues/255/labels{/name}",
    //   "comments_url": "https://api.github.com/repos/GoogleChrome/devtools-docs/issues/255/comments",
    //   "events_url": "https://api.github.com/repos/GoogleChrome/devtools-docs/issues/255/events",
    //   "html_url": "https://github.com/GoogleChrome/devtools-docs/issues/255",
    //   "id": 59258435,
    //   "number": 255,
    //   "title": "Count different issues in error. Count different issues in error. Count different issues in error. Count different issues in error. ",
    //   "user": {
    //     "login": "Garbee",
    //     "id": 868301,
    //     "avatar_url": "https://avatars.githubusercontent.com/u/868301?v=3",
    //     "gravatar_id": "",
    //     "url": "https://api.github.com/users/Garbee",
    //     "html_url": "https://github.com/Garbee",
    //     "followers_url": "https://api.github.com/users/Garbee/followers",
    //     "following_url": "https://api.github.com/users/Garbee/following{/other_user}",
    //     "gists_url": "https://api.github.com/users/Garbee/gists{/gist_id}",
    //     "starred_url": "https://api.github.com/users/Garbee/starred{/owner}{/repo}",
    //     "subscriptions_url": "https://api.github.com/users/Garbee/subscriptions",
    //     "organizations_url": "https://api.github.com/users/Garbee/orgs",
    //     "repos_url": "https://api.github.com/users/Garbee/repos",
    //     "events_url": "https://api.github.com/users/Garbee/events{/privacy}",
    //     "received_events_url": "https://api.github.com/users/Garbee/received_events",
    //     "type": "User",
    //     "site_admin": false
    //   },
    //   "labels": [{
    //     "url": "https://api.github.com/repos/GoogleChrome/devtools-docs/labels/Low%20Priority",
    //     "name": "Low Priority",
    //     "color": "bfd4f2"
    //   }, {
    //     "url": "https://api.github.com/repos/GoogleChrome/devtools-docs/labels/Workflow",
    //     "name": "Workflow",
    //     "color": "fbca04"
    //   }],
    //   "state": "open",
    //   "locked": false,
    //   "assignee": {
    //     "login": "kdzwinel",
    //     "id": 985504,
    //     "avatar_url": "https://avatars.githubusercontent.com/u/985504?v=3",
    //     "gravatar_id": "",
    //     "url": "https://api.github.com/users/kdzwinel",
    //     "html_url": "https://github.com/kdzwinel",
    //     "followers_url": "https://api.github.com/users/kdzwinel/followers",
    //     "following_url": "https://api.github.com/users/kdzwinel/following{/other_user}",
    //     "gists_url": "https://api.github.com/users/kdzwinel/gists{/gist_id}",
    //     "starred_url": "https://api.github.com/users/kdzwinel/starred{/owner}{/repo}",
    //     "subscriptions_url": "https://api.github.com/users/kdzwinel/subscriptions",
    //     "organizations_url": "https://api.github.com/users/kdzwinel/orgs",
    //     "repos_url": "https://api.github.com/users/kdzwinel/repos",
    //     "events_url": "https://api.github.com/users/kdzwinel/events{/privacy}",
    //     "received_events_url": "https://api.github.com/users/kdzwinel/received_events",
    //     "type": "User",
    //     "site_admin": false
    //   },
    //   "milestone": null,
    //   "comments": 3,
    //   "created_at": "2015-02-27T16:25:39Z",
    //   "updated_at": "2015-03-01T17:10:13Z",
    //   "closed_at": null,
    //   "body": "Travis's test suite should count the different types of errors and display a quick line display of each and their count in the document.\r\n\r\nFor example:\r\n```\r\nPassive voice: 5\r\nWeak meaning: 10\r\nSpelling: 25 (because this person doesn't know how to use a spellcheck...)\r\n```\r\n\r\nThis way we could get a quick overview of a documents readiness status when a PR is made.\r\n\r\ncc @kdzwinel since you built this thing and may know if it is possible."
    // }];

    // var obj2 = {
    //   "url": "https://api.github.com/repos/GoogleChrome/devtools-docs/issues/255",
    //   "labels_url": "https://api.github.com/repos/GoogleChrome/devtools-docs/issues/255/labels{/name}",
    //   "comments_url": "https://api.github.com/repos/GoogleChrome/devtools-docs/issues/255/comments",
    //   "events_url": "https://api.github.com/repos/GoogleChrome/devtools-docs/issues/255/events",
    //   "html_url": "https://github.com/GoogleChrome/devtools-docs/issues/255",
    //   "id": 59258435,
    //   "number": 255,
    //   "title": "Count different issues in error.",
    //   "user": {
    //     "login": "Garbee",
    //     "id": 868301,
    //     "avatar_url": "https://avatars.githubusercontent.com/u/868301?v=3",
    //     "gravatar_id": "",
    //     "url": "https://api.github.com/users/Garbee",
    //     "html_url": "https://github.com/Garbee",
    //     "followers_url": "https://api.github.com/users/Garbee/followers",
    //     "following_url": "https://api.github.com/users/Garbee/following{/other_user}",
    //     "gists_url": "https://api.github.com/users/Garbee/gists{/gist_id}",
    //     "starred_url": "https://api.github.com/users/Garbee/starred{/owner}{/repo}",
    //     "subscriptions_url": "https://api.github.com/users/Garbee/subscriptions",
    //     "organizations_url": "https://api.github.com/users/Garbee/orgs",
    //     "repos_url": "https://api.github.com/users/Garbee/repos",
    //     "events_url": "https://api.github.com/users/Garbee/events{/privacy}",
    //     "received_events_url": "https://api.github.com/users/Garbee/received_events",
    //     "type": "User",
    //     "site_admin": false
    //   },
    //   "labels": [{
    //     "url": "https://api.github.com/repos/GoogleChrome/devtools-docs/labels/Low%20Priority",
    //     "name": "Low Priority",
    //     "color": "bfd4f2"
    //     }, {
    //     "url": "https://api.github.com/repos/GoogleChrome/devtools-docs/labels/Workflow",
    //     "name": "Workflow",
    //     "color": "fbca04"
    //   }],
    //   "state": "open",
    //   "locked": false,
    //   "assignee": {
    //     "login": "kdzwinel",
    //     "id": 985504,
    //     "avatar_url": "https://avatars.githubusercontent.com/u/985504?v=3",
    //     "gravatar_id": "",
    //     "url": "https://api.github.com/users/kdzwinel",
    //     "html_url": "https://github.com/kdzwinel",
    //     "followers_url": "https://api.github.com/users/kdzwinel/followers",
    //     "following_url": "https://api.github.com/users/kdzwinel/following{/other_user}",
    //     "gists_url": "https://api.github.com/users/kdzwinel/gists{/gist_id}",
    //     "starred_url": "https://api.github.com/users/kdzwinel/starred{/owner}{/repo}",
    //     "subscriptions_url": "https://api.github.com/users/kdzwinel/subscriptions",
    //     "organizations_url": "https://api.github.com/users/kdzwinel/orgs",
    //     "repos_url": "https://api.github.com/users/kdzwinel/repos",
    //     "events_url": "https://api.github.com/users/kdzwinel/events{/privacy}",
    //     "received_events_url": "https://api.github.com/users/kdzwinel/received_events",
    //     "type": "User",
    //     "site_admin": false
    //   },
    //   "milestone": null,
    //   "comments": 3,
    //   "created_at": "2015-02-27T16:25:39Z",
    //   "updated_at": "2015-03-01T17:10:13Z",
    //   "closed_at": null,
    //   "body": "Travis's test suite should count the different types of errors and display a quick line display of each and their count in the document.\r\n\r\nFor example:\r\n```\r\nPassive voice: 5\r\nWeak meaning: 10\r\nSpelling: 25 (because this person doesn't know how to use a spellcheck...)\r\n```\r\n\r\nThis way we could get a quick overview of a documents readiness status when a PR is made.\r\n\r\ncc @kdzwinel since you built this thing and may know if it is possible.",
    //   "closed_by": null
    // };


    this.list = function(page, perPage) {
      perPage = perPage || 30;
      page = page || 1;
      // return obj;

      return $http.get(baseUrl + 'issues?page=' + page + '&per_page=' + perPage).success(function(resp) {
        return resp.data;
      });
    };

    this.get = function(number) {
      return $http.get(baseUrl + 'issues/' + number).success(function(resp) {
        return resp.data;
      });
    };

    this.getAll = function() {
      return $http.get(baseUrl + 'issues?per_page=1000').success(function(resp) {
        return resp;
      });
    };

    this.getComments = function(number) {
      return $http.get(baseUrl + 'issues/' + number + '/comments').success(function(resp) {
        return resp.data;
      });
    };

}]);
