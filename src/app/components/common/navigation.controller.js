/**
 * Created by vinicius on 4/24/17.
 */
'use strict';

angular.module('tp-final')
  .controller('NavigationController', function ($state) {

    var vm = this;
    console.log(localStorage.getItem('user'));
    vm.primeiroEl = '';
    vm.segundooEl = '';
    vm.desapear = false;
    if(localStorage.getItem('user') === 'adm'){
      vm.desapear = true;
    }
    else{
      vm.desapear = false;
    }
    vm.logout = function(){
      localStorage.clear();
      if(vm.desapear === true){
        swal("", "Deslogado com sucesso!", "success");
        $state.go('loginAdm');
      }
      else{
        swal("", "Deslogado com sucesso!", "success");
        $state.go('login');
      }

    }
  });
