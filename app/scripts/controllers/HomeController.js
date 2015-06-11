'use strict';

module.exports = ['$scope', 'GAuth', '$state', 'GApi', 'GData', 
  function ($scope, GAuth, $state, GApi, GData) {

  // var user = GData.getUser();
  // setTimeout(function() {
  //   console.log(user);
  // }, 100);

  $scope.isLoggedIn = function () {
    AuthHelpers.isLogin();
    console.log('GAuth.checkAuth()', GAuth.checkAuth().then(function () {console.log('wow')}));
    GAuth.checkAuth().then(function () {console.log('wow')});
  };
  
}];