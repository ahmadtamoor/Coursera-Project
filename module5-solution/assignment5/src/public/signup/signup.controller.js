(function() {

    angular.module('public')

    .controller('SignupController', SignupController);

    SignupController.$inject = ['MenuService', 'UserService'];

    function SignupController(MenuService, UserService) {
        var ctrl = this;

        ctrl.submit = function() {
          UserService.setUser(ctrl.user);
           
        }
    }
})();
