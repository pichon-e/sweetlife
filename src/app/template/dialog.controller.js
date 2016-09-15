(function() {
  'use strict';

  angular
    .module('test')
    .controller('DialogController', DialogController);

  /** @ngInject */
  function DialogController($timeout, webDevTec, toastr, $state, $scope, obj, $mdDialog) {
    var vm = this;
    $scope.article = obj;

    $scope.hide = false;

    $scope.click = function() {
      $scope.hide = true;
    }

    $scope.close = function() {
      $mdDialog.hide();
    }
  }
})();
