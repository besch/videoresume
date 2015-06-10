'use strict';

module.exports = ['$scope', 'GAuth', '$state', 'GApi', function ($scope, GAuth, $state, GApi) {

  console.log(GApi)

  $scope.doSingup = function() {
    GAuth.login().then(function(){
      console.log('Login success')
    }, function() {
      console.log('Login failure')
    });
  };
  
  
}];