/**
 * Created by vinicius on 4/24/17.
 */
'use strict';

angular.module('tp-final')
  .controller('LoginAdmController', function ($state) {

    var vm = this;

    vm.user = {};

    vm.doingRequest = false;

    vm.button = function () {
      if (vm.user.password.length >= 6) {
        return true
      }
      else return false;
    };

    vm.auth = function () {
        localStorage.setItem("user", "adm");
        $state.go('index.mainAdm');
    }

  });
