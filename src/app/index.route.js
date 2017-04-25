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
        controller:"MainController",
        controllerAs: 'ctrl'
      })
      .state('index.mainAdm', {
        url: "/mainAdm",
        templateUrl: "app/main/mainAdm.html",
        controller:"MainAdmController",
        controllerAs: 'ctrl'
      })
      .state('index.details', {
        url: "/details",
        templateUrl: "app/details/details.html",
        controller: "DetailsController",
        controllerAs: 'ctrl'
      })
      .state('index.pedidos', {
        url: "/pedidos",
        templateUrl: "app/minor/pedidos.html",
        controller: "PedidosController",
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/login');
  }

})();
