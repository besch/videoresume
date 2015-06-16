
module.exports = ['$window', 'GApi', '$rootScope', 'VideoService', 'constants', 
  function ($window, GApi, $rootScope, VideoService, constants) {
  
  return {
    restrict: 'EA',
    template: '<div></div>',
    link: function (scope, elem, attr) {
      var tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      
      // console.log('scope', scope)
      // console.log('$rootScope.title', $rootScope.videoTitle);
      // console.log('videoTitle', scope.$parent.$parent.video)
      
      var player,

        player = new YT.Player('player', {
          height: 390,
          width: 640,
          videoId: event.data.videoId,
          events: {}
        });
      }
    }
  }
  
}];