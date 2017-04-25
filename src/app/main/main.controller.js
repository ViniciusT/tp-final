'use strict';

angular.module('tp-final')
  .controller('MainController', function () {

    var vm = this;
    vm.send = function () {
      swal("", "Pedido enviado com sucesso!", "success")
    }
  });
