'use strict';

module.exports = ['$scope', '$state', 'AuthHelpers', function ($scope, $state, AuthHelpers) {

  $scope.doSingup = function() {
    if(!AuthHelpers.isLogin()) {
      AuthHelpers.login();
    }
  };
  
  
}];