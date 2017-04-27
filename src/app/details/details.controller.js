/**
 * Created by vinicius on 4/24/17.
 */
'use strict';

angular.module('tp-final')
  .controller('DetailsController', function ($state) {

    var vm = this;
    vm.desapear = false;
    if(localStorage.getItem('user') === 'adm'){
      vm.desapear = true;
    }
    else{
      vm.desapear = false;
    }
    vm.changeRoute = function(option){
      if(option === 2){
        swal({
            title: "Tem certeza?",
            text: "Esse pedido será recusado automaticamente!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Sim, recuse o pedido!",
            closeOnConfirm: false
          },
          function(){
            $state.go('index.mainAdm');
            swal("", "Pedido recusado com sucesso.", "success");

          });
      }
      else{
        swal({
            title: "Tem certeza?",
            text: "Esse pedido será aceito automaticamente!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Sim, aceite o pedido!",
            closeOnConfirm: false
          },
          function(){
            $state.go('index.mainAdm');
            swal("", "Pedido aceito com sucesso.", "success");
          });
      }


    };
  });
