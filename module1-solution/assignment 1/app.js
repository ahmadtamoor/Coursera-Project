( function ()
  {
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
   LunchCheckController.$inject = ['$scope'];

    function  LunchCheckController ($scope)
    {
      $scope.lunchMenu = "";
      $scope.borderSize = "1px";
      $scope.borderColor= "White";

      $scope.checklunchmenu = function ()
      {

        var items = $scope.lunchMenu.split(',');

        if($scope.lunchMenu == "")
{
          $scope.message = "Please enter Lunch Menu First!";
          $scope.check = "1px";
              $scope.borderColor= "Red";
}

        else if(items.length <= 3)
{
          $scope.message = "Enjoy!";
          $scope.check = "1px";
              $scope.borderColor= "Green";
}
        else
{
          $scope.message = "Too much!";
          $scope.check = "2px";
              $scope.borderColor= "Green";
}      };
    }
  })();
