var MyApp = angular.module('MyApp',["ui.router","ui.bootstrap"]);
MyApp.config(function($stateProvider,$urlRouterProvider,$locationProvider) {
    $stateProvider
    .state("/", {
      templateUrl : "./login/login.html",
      url: '/',
      controller: "LoginController"
    })
    .state("/login", {
        templateUrl : "./login/login.html",
        url: '/login',
        controller: "LoginController"
      })
    .state("/notes", {
      templateUrl : "./notes/notes.html",
      url: '/notes',
      controller: "notesController"
    });
    $urlRouterProvider.otherwise("/login");
  });