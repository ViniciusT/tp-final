'use strict';

angular.module('tp-final')
  .controller('PedidosController', function () {

    var vm = this;

    vm.pedidos = [
      {
        name: 'Vinicius',
        matricula: '2012/2',
        requerimento: 'Cancelamento de matricula'
      },
      {
        name: 'Vinicius',
        matricula: '2012/2',
        requerimento: 'Cancelamento de matricula'
      },
      {
        name: 'Vinicius',
        matricula: '2012/2',
        requerimento: 'Cancelamento de matricula'
      },
      {
        name: 'Vinicius',
        matricula: '2012/2',
        requerimento: 'Cancelamento de matricula'
      },
      {
        name: 'Vinicius',
        matricula: '2012/2',
        requerimento: 'Cancelamento de matricula'
      }

    ]
  });
