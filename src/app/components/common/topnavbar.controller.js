/**
 * Created by vinicius on 4/24/17.
 */
'use strict';

angular.module('tp-final')
  .controller('TopNavController', function ($state) {

    var vm = this;
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
        $state.go('loginAdm');
      }
      else{
        $state.go('login');
      }

    }
  });
