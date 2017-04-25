(function() {
  'use strict';

  angular
    .module('tp-final')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('index', {
        abstract: true,
        url: "/index",
        templateUrl: "app/components/common/content.html"
      })
      .state('login', {
        url: "/login",
        templateUrl: "app/auth/login.html",
        controller: "LoginController",
        controllerAs: 'ctrl'
      })
      .state('loginAdm', {
        url: "/loginAdm",
        templateUrl: "app/auth/loginAdm.html",
        controller: "LoginAdmController",
        controllerAs: 'ctrl'
      })
      .state('index.main', {
        url: "/main",
        templateUrl: "app/main/main.html",
        data: { pageTitle: 'Example view' }
      })
      .state('index.minor', {
        url: "/minor",
        templateUrl: "app/minor/pedidos.html",
        controller: "PedidosController",
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/login');
  }

})();
