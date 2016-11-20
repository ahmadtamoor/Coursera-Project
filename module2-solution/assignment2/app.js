(function () {
    'use strict';


    var shoppingList = [
  {
      name: "Milk",
      quantity: "2"
  },
  {
      name: "Donuts",
      quantity: "200"
  },
  {
      name: "Cookies",
      quantity: "300"
  },
  {
      name: "Chocolate",
      quantity: "5"
  },
  {
      name: "Bread",
      quantity: "10"
  }
];

    angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController);

    ShoppingListController.$inject = ['$scope'];
    function ShoppingListController($scope) {
        $scope.shoppingList = shoppingList;
        $scope.boughtitemList = []; 
        
       
        $scope.addtoBoghtlist = function (item) {

            var index = $scope.shoppingList.indexOf(item);
            $scope.shoppingList.splice(index, 1);
            $scope.boughtitemList.push(item);
        };
    }

})();
