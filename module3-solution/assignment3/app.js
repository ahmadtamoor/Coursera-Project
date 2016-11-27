(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItems);


function FoundItems() {
  var ddo = {
    templateUrl: 'foundItem.html',
    scope:{
      items:'<',
      onRemove: '&'
    },
    controller: FoundItemDirectiveController,
        controllerAs: 'list',
        bindToController: true
      };

  return ddo;
}
function FoundItemDirectiveController() {
  var list = this;

}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuCategoriesService) {
  var menu = this;
  menu.searchTerm ="";
  menu.showmenu = false;

  menu.foundMenuItem = function()
  {

    var promise = MenuCategoriesService.getMatchedMenuItems(menu.searchTerm);

    promise.then(function (response) {

     menu.foundMenuItems = response;
    //  menu.showmenu = true;
  //  console.log(menu.foundMenuItems.length);
 if(menu.foundMenuItems.length > 0)
 {
     menu.showmenu = true;
 }
    })
    .catch(function (error) {
      console.log(error);
    })
  };
  menu.removeItem = function (itemIndex) {


var item =  menu.foundMenuItems[itemIndex];
var index =  menu.foundMenuItems.indexOf(item);
console.log(index);
     menu.foundMenuItems.splice(index, 1);
    //foundMenuItems.removeItem(itemIndex);
    console.log(itemIndex);
    if(menu.foundMenuItems.length == 0)
    {
        menu.showmenu = false;
    }
  };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;


  service.getMatchedMenuItems = function (searchTerm) {

  	return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")

    }).then(function (result) {

var items = result.data.menu_items;
//console.log(items);
var foundItems =[];
if (searchTerm == "")
{
    return foundItems;
}

      var len =items.length;
          for (var i = 0; i < len; i++) {

        var itemdesc = items[i].description.toUpperCase();

        if (itemdesc.indexOf(searchTerm.toUpperCase()) != -1)
        {

        foundItems.push(items[i]);
        }

    }
      return foundItems;
    });
    };

}

})();
