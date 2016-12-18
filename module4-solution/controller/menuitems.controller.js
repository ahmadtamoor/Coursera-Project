(function () {
  'use strict'
  angular.module('Menu')
  .controller('ItemController', ItemController);
ItemController.$inject = ['items'];
  function ItemController(items) {
    var itemCtrl = this;
    itemCtrl.items = items.menu_items;
    itemCtrl.category = items.category.name;
  }
})();
