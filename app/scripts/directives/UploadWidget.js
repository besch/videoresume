
module.exports = ['$window', 'GApi', '$rootScope', 'VideoService', 'constants', 'toaster',
  function ($window, GApi, $rootScope, VideoService, constants, toaster) {
  
  return {
    restrict: 'EA',
    // template: '<i class="loading icon" ng-show="processing"></i>' +
    //             '<div class="perspective">' +
    //             '<butpton ng-hide="processing" class="btn-next" ng-click="submitStep3()">Share video</button>' +
    //           '</div>',
    template: '<div></div>',
    // scope: true,
    // bindToController: {
    // scope: {
    //   videoTitle: '@',
    //   videoDescription: '@'
    // },
    // controller: function ($scope) {
    //   console.error($scope);
    // },
    link: function (scope, elem, attr) {
      var tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      
      // console.log('scope', scope)
      // console.log('$rootScope.title', $rootScope.videoTitle);
      // console.log('videoTitle', scope.$parent.$parent.video)
      
      var widget,
          player,
          title,
          description,
          category,
          privacy = constants.youtube.privacy;
          
      $rootScope.processingVideo = false;
      $rootScope.processingVideoComplete = false;
            
      // onStateChange
      // YT.UploadWidgetState.IDLE
      // YT.UploadWidgetState.PENDING
      // YT.UploadWidgetState.ERROR
      // YT.UploadWidgetState.PLAYBACK
      // YT.UploadWidgetState.RECORDING
      // YT.UploadWidgetState.STOPPED
      
      $window.onYouTubeIframeAPIReady = function () {
        
        widget = new YT.UploadWidget('widget', {
          width: 500,
          events: {
            'onUploadSuccess': onUploadSuccess,
            'onProcessingComplete': onProcessingComplete,
            'onApiReady': onApiReady
          }
        });
      };
      
      
      function onApiReady () {
        
        // console.log($rootScope);
        
        title       = '(' + $rootScope.videoCategory + ') ' + $rootScope.videoTitle || '';
        description = $rootScope.videoDescription || '';
        category    = $rootScope.videoCategory || '';
        
        widget.setVideoTitle(title);
        widget.setVideoDescription(description);
        widget.setVideoPrivacy(privacy);
        widget.setVideoKeywords(title, description, category);
      };

      // 4. This function is called when a video has been successfully uploaded.
      function onUploadSuccess(event) {
        // console.log('Video ID ' + event.data.videoId + ' was uploaded and is currently being processed.');
        // console.log('video props', event.data)
        // console.log('upload success')

        VideoService.addVideo(event.data.videoId, event.data.correlationId, title, description, category);
        $rootScope.processingVideo = true;
        
        scope.$apply();
      };

      // 5. This function is called when a video has been successfully processed.
      function onProcessingComplete(event) {
                
        player = new YT.Player('player', {
          height: 390,
          width: 500,
          videoId: event.data.videoId,
          events: {}
        });
        
        $rootScope.processingVideo = false;
        $rootScope.processingVideoComplete = true;

        scope.$apply();
        
        // GApi.executeAuth('youtube', 'playlistItems.insert', {
        //   part: 'snippet',
        //   resource: {
        //     snippet: {
        //       title: 'VideoResume'
        //       // playlistId: playlistId,
        //       // resourceId: details
        //     }
        //   }
        // }).then(function (res) {
        //   console.log(res);
        // }, function (err) {
        //   console.log(err);
        // })
        // 
      }
    }
  }
  
}];