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
          $scope.messageDiv = "Please enter data Lunch Menu!";
          $scope.check = "1px";
              $scope.borderColor= "Red";
}

        else if(items.length <= 3)
{
          $scope.messageDiv = "Enjoy!";
          $scope.check = "1px";
              $scope.borderColor= "Green";
}
        else
{
          $scope.messageDiv = "Too much!";
          $scope.check = "2px";
              $scope.borderColor= "Green";
}      };
    }
  })();
