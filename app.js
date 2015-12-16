var projectApp = angular.module('projectApp',['projectServices', 'ui.router']);

projectApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/departments");

  $stateProvider
    .state('departments', {
      url: "/departments",
      views: {
        "content": {
          templateUrl: "partials/departments.html"
        }
      }
    })
    .state('departments.resources', {
      url: "/resources",
      views: {
        "content@": {
          templateUrl: "partials/departments.resources.html"
        }
      }
    })
    .state('deadlines', {
      url: "/deadlines",
      views: {
        "content": {
          templateUrl: "partials/deadlines.html"
        }
      }
    })
    .state('deadlines.resources', {
      url: "/resources",
      views: {
        "content@": {
          templateUrl: "partials/deadlines.resources.html"
        }
      }
    })
    .state('projects', {
      url: "/projects",
      views: {
        "content": {
          templateUrl: "partials/projects.html"
        }
      }
    })
    .state('projects.resources', {
      url: "/resources",
      views: {
        "content@": {
          templateUrl: "partials/projects.resources.html"
        }
      }
    });
});
