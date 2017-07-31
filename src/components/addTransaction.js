(function(){
  'use strict';

  angular
    .module('peachtree')
    .component('addTransaction', {
      templateUrl: '/src/templates/add-transaction.html',
      controller: AddTransaction,
      controllerAs: 'vm'
    });

  AddTransaction.$inject = ['storageService', '$window', '$timeout'];

  function AddTransaction (storage, $window, $timeout) {
    var vm = this;

    vm.store = {};
    vm.account = 'Free Checking (4692)';
    vm.amount = '';
    vm.amountValid = true;
    vm.merchant = '';
    vm.merchantValid = true;
    vm.validateField = validateField;
    vm.confirmTransaction = confirmTransaction;
    vm.addTransaction = addTransaction;

    activate();

    function confirmTransaction () {
      if (validateForm() === false) return;
      $window.$('#confirmTransaction').modal();
    }
    function validateForm () {
      var isMerchantValid = validateField('merchant');
      var isAmountValid = validateField('amount');
      var areFieldsValid = (isMerchantValid && isAmountValid);

      if (areFieldsValid && checkBalance() === false) {
        alert('You cannot transfer money beyond a balance of $ -500.00.');
        return false;
      }

      return areFieldsValid;
    }
    function validateField (field) {
      if (field === 'merchant') {
        vm.merchant = vm.merchant.trim();
        vm.merchantValid = (vm.merchant !== '');
        return vm.merchantValid;
      } else if (field === 'amount') {
        vm.amount = parseFloat(vm.amount);
        vm.amountValid = (isNaN(vm.amount) === false && vm.amount > 0);
        return vm.amountValid;
      }
    }
    function checkBalance () {
      return ((vm.store.balance - vm.amount) > -550);
    }

    function addTransaction () {
      var categoryCode = '#1180aa';
      var transactionType = 'Transaction';
      var transactionDate = (new Date()).getTime();

      storage.addTransaction({
        amount: vm.amount,
        merchant: vm.merchant,

        categoryCode: categoryCode,
        transactionType: transactionType,
        transactionDate: transactionDate
      });

      resetFormData();
      $timeout(function(){ alert('You transaction was successful!'); }, 50);
    }
    function resetFormData () {
      vm.amount = '';
      vm.merchantAmount = true;
      vm.merchant = '';
      vm.merchantValid = true;
    }

    function activate () {
      vm.store = storage.getState();
    }
  }
})();
