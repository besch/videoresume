'use strict';

module.exports = ['GAuth', 'GApi', '$state', 'AuthHelpers', '$rootScope',
    function(GAuth, GApi, $state, AuthHelpers, $rootScope) {

      var CLIENT = '816450907263-etvolk1rdhu8l60os66d5p2cppq1ffj3.apps.googleusercontent.com';
      GAuth.setClient(CLIENT);
      
      GApi.load('calendar', 'v3');
      GApi.load('youtube', 'v3');
      GApi.load('plus', 'v1');
      GAuth.setScope('https://www.googleapis.com/auth/plus.profile.emails.read https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/youtube');
      GAuth.checkAuth().then(
        function () {
          // $state.go('home');
        },
        function(data) {
          // $state.go('login');
        }
      );
      
      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        if(!AuthHelpers.isLogin()) {
          AuthHelpers.login();
        }
      });
    }
];