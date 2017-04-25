/**
 * Created by vinicius on 4/24/17.
 */
'use strict';

angular.module('tp-final')
  .controller('NavigationController', function ($state) {

    var vm = this;
    console.log(localStorage.getItem('user'));
    vm.nome = '';

    vm.desapear = false;
    if(localStorage.getItem('user') === 'adm'){
      vm.desapear = true;
      vm.nome = 'Adm Cabuloso'
    }
    else{
      vm.desapear = false;
      vm.nome = 'Aluno Cabuloso'
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
