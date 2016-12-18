(function() {

    'use strict'

    angular.module('public')
        .directive('dishcheck', DishCheck);

    DishCheck.$inject = ['MenuService', '$q', 'ApiPath'];

    function DishCheck(MenuService, $q, ApiPath) {
        return {
            restrict: 'AE',
            require: 'ngModel',
            link: function(scope, elm, attr, model) {
                model.$asyncValidators.DishExists = function(modelValue, viewValue) {
                    if (viewValue) {
                        return MenuService.getMenuItem(viewValue)
                            .then(function(response) {
                                return true;
                            }, function() {
                                return $q.reject('Selected dish does not exists');
                            });
                    } else {
                        return $q.resolve('No favourite selected');
                    }
                };
            }
        }
    }
})();
