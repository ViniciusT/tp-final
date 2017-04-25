'use strict';

angular.module('tp-final')
  .controller('PedidosController', function ($scope) {

    var vm = this;

    vm.pedidos = [
      {
        name: 'Vinicius1',
        matricula: '2012/2',
        requerimento: 'Cancelamento de matricula'
      },
      {
        name: 'Vinicius2',
        matricula: '2012/2',
        requerimento: 'Cancelamento de matricula'
      },
      {
        name: 'Vinicius3',
        matricula: '2012/2',
        requerimento: 'Cancelamento de matricula'
      },
      {
        name: 'Vinicius4',
        matricula: '2012/2',
        requerimento: 'Cancelamento de matricula'
      },
      {
        name: 'Vinicius5',
        matricula: '2012/2',
        requerimento: 'Cancelamento de matricula'
      }

    ];

      vm.removeItem = function(index){
        swal({
            title: "Tem certeza?",
            text: "Esse pedido será removido automaticamente!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Sim, remova o pedido!",
            closeOnConfirm: false
          },
          function(){
            $scope.$apply(function () {
              vm.pedidos.splice(index, 1);
            });
            swal("", "Pedido removido com sucesso.", "success");
          });

      };
  });
