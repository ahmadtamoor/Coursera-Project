(function () {
  'use strict';
  angular.module('Menu')
  .component('menuItems',{
    templateUrl: '../templates/items.template.html',
    bindings: {
      items: '<'
    }
  });
})();
