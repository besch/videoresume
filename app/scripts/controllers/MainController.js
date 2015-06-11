'use strict';

module.exports = ['$scope', 'GAuth', '$state', 'GApi', 'GData', 'AuthHelpers', 
  function ($scope, GAuth, $state, GApi, GData, AuthHelpers) {

  $scope.isLogin = function () {
    console.log('AuthHelpers.isLogin();', AuthHelpers.isLogin())
    return AuthHelpers.isLogin();
  };
  
  
}];