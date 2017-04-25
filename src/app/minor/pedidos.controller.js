'use strict';

angular.module('tp-final')
  .controller('PedidosController', function () {

    var vm = this;
    vm.primeiroEl = '';
    vm.segundooEl = '';
    if(localStorage.getItem('user') == 'adm'){
      vm.primeiroEl = 'Pedidos Recebidos'
    }
    else{
      vm.primeiroEl = 'Fazer Pedido';
      vm.segundooEl = 'Pedidos Pendentes';
    }
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
