
module.exports = ['$scope', 'VideoService', '$firebaseObject', '$rootScope',
  function ($scope, VideoService, $firebaseObject, $rootScope) {
  
  $scope.addDummy1 = function () {
    VideoService.addVideo(1,1,1,1,1) 
  };
  $scope.addDummy2 = function () {
    VideoService.addVideo(2,2,2,2,2);
  };
  
  
  var userRef = $rootScope.userRef;
  var ref = userRef.child('videos');
  
  var syncObject = $firebaseObject(ref);
  syncObject.$bindTo($scope, 'videos');
  
  // $scope.videos = VideoService.listVideos();
  
  $scope.deleteVideo = function (id) {
    
    VideoService.deleteVideo(id); 
  };
  
  $scope.editVideo = function (id) {
    // VideoService.deleteVideo(id); 
  };
  
}];