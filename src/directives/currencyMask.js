(function(){
  "use strict";

  angular
    .module('peachtree')
    .directive('currencyMask', function () {
      return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {
          element.on('keypress', validateKey)
          element.on('paste', validatePaste)
        }
      }
    })

    function validateKey ($event) {
      var keyIsEnter = $event.which === 13;
      if (keyIsEnter) return;

      var isDecimal = ($event.target.value.toString().indexOf('.') > -1)
      var regex = (isDecimal) ? /[\d]/ : /[\d\.]/
      var isValidChar = regex.test($event.key)

      if (isValidChar === false) {
        $event.preventDefault();
      }
    }
    function validatePaste ($event) {
      var clipboardData = $event.clipboardData.getData('text/plain');

      if (/^[\d]+(\.[\d]+)?$/.test(clipboardData) === false) {
        $event.preventDefault();
      }
    }
})()