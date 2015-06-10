"use strict";

module.exports = ['$scope', '$rootScope', '$state', 'AuthHelpers', 'UserService', 
function ($scope, $rootScope, $state, AuthHelpers, UserService) {

  // AuthHelpers.login();

  $scope.login = function () {
    return AuthHelpers.login();
  };
  
  $scope.logout = function () {
    return AuthHelpers.logout();
  };
  
  $scope.isLogin = function () {
    return AuthHelpers.getUser();
  };
  
  $scope.saveUser = function () {
    UserService.saveUser();
  }
  
  $scope.addDummy = function () {
    UserService.addDummy();
  }
  
  $scope.listChannels = function () {
    GApi.executeAuth('youtube', 'channels.list', {
      mine: true,
      part: 'contentDetails'
    }).then(function (res) {
      $rootScope.channel = res.items[0];
      console.log($rootScope.channel.id)
    })
  }
  
  $scope.listVideos = function () {
    GApi.executeAuth('youtube', 'playlists.list', {
      part: 'snippet,status',
      resource: {
        snippet: {
          title: 'VideoResume',
        },
        // status: {
        //   privacyStatus: 'unlisted'
        // }
      }
    }).then(function(resp) {
      $scope.playlists = resp.items;
    });
  };
  
  $scope.insertPlaylist = function() {
    GApi.executeAuth('youtube', 'playlists.insert', {
      part: 'snippet,status',
      resource: {
        snippet: {
          title: 'VideoResume',
          description: 'This is your unlisted VideoResume playlist.'
        },
        status: {
          privacyStatus: 'unlisted'
        }
      }
    }).then(function (resp) {
      $rootScope.playlistId = resp.result.id;
      console.log($rootScope.playlistId);
    });
  };
  
  $scope.deletePlaylist = function() {
    GApi.executeAuth('youtube', 'playlists.delete', {
      id: $rootScope.playlistId
    }).then(function (resp) {
      console.log($rootScope.playlistId);
    });
  };
  
  
}];