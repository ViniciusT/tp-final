/**
 * Created by vinicius on 4/24/17.
 */
'use strict';

angular.module('tp-final')
  .controller('NavigationController', function () {

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
  });
