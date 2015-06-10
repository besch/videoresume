
module.exports = ['$rootScope', '$q', '$timeout', 
  function ($rootScope, $q, $timeout) {
  
  var userRef = $rootScope.userRef;
  var ref = userRef.child('videos');
  
  var addVideo = function (videoId, correlationId, title, desc, category) {
    
    return ref.push({
      videoId: videoId,
      correlationId: correlationId,
      title: title,
      description: desc,
      category: category,
      createdAt: Date.now(),
    });
  };
  
  var getVideo = function (id) {
    var videoref = ref.child(id);
    ref.once('value', function (res) {
      return res;
    });
  };
  
  var listVideos = function () {
    
    return ref.once('value', function (data) {
      console.error('data', data.val());
      return data.val();
    });
  };
  
  var deleteVideo = function (id) {
    var videoref = ref.child(id);
    return ref.set(null); // removes entire object
  };
  
  var updateVideo = function (id, title, desc, category) {
    var videoProp = getVideo(id);
    
    var title = title || videoProp.title,
        description = desc || videoProp.description,
        category = desc || videoProp.category,
        updatedAt = Date.now();
    
    var videoref = ref.child('videos').child(id);
    return ref.set({
      title: title,
      description: desc,
      category: category,
      updatedAt: updatedAt
    });
  };
  
  return {
    addVideo: addVideo,
    getVideo: getVideo,
    listVideos: listVideos,
    deleteVideo: deleteVideo,
    updateVideo: updateVideo
  };
  
}];