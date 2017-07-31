(function(){
  'use strict';

  angular
    .module('peachtree')
    .component('transactionsList', {
      templateUrl: '/src/templates/transactions-list.html',
      controller: TransactionsListController,
      controllerAs: 'vm'
    });

  TransactionsListController.$inject = ['storageService'];

  function TransactionsListController (storageService) {
    var vm = this;

    vm.filter = '';
    vm.sortBy = '';
    vm.sortAsc = true;
    vm.sortFilter = '';
    vm.sortingClass = '';
    vm.store = {
      isLoading: true,
      transactions: []
    };
    vm.sort = sort;
    vm.escapeReset = escapeReset;

    activate();

    function activate () {
      vm.store = storageService.getState();
      sort('transactionDate');
    }
    function sort (field) {
      vm.sortAsc = (vm.sortBy !== field) ? vm.sortAsc : !vm.sortAsc;
      vm.sortBy = field;
      vm.sortFilter = (vm.sortAsc !== true) ? field : '-' + field;
      vm.sortingClass = (vm.sortAsc === true) ? 'sorting-asc' : 'sorting-desc';
    }
    function escapeReset ($event) {
      if ($event.keyCode === 27) {
        vm.filter = '';
      }
    }
  }
})();
