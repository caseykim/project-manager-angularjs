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
    .state('departments.project', {
      url: "/project/:id",
      views: {
        "content@": {
          templateUrl: "partials/project.detail.html",
          controller: "ProjDetailCtrl"
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
    .state('deadlines.project', {
      url: "/project/:id",
      views: {
        "content@": {
          templateUrl: "partials/project.detail.html",
          controller: "ProjDetailCtrl"
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
    })
    .state('projects.project', {
      url: "/project/:id",
      views: {
        "content@": {
          templateUrl: "partials/project.detail.html",
          controller: "ProjDetailCtrl"
        }
      }
    });
});
