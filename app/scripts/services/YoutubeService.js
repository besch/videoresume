'use strict';

module.exports = ['GApi', function (GApi) {
  // without params
  // var list = GApi.executeAuth('youtube', 'list')
  // .then( function(resp) {
  //   //
  // }, function() {
  //   console.log("error :(");
  // });
  
  var getVideo = function (id) {
    GApi.executeAuth('youtube', 'videos', {id: id})
    .then( function(resp) {
      console.log('video ' + id, resp)
    }, function() {
      console.log("error :(");
    });
  };
  //TODO
  // var updateVideo = function () {
  //   GApi.executeAuth('youApi', 'update', {parm1: value})
  // .then( function(resp) {

  // }, function() {
  //   console.log("error :(");
  // });
  
  var deleteVideo = function (id) {
    GApi.executeAuth('youtube', 'videos.delete', {id: id})
    .then( function(resp) {
      console.log('video ' + id + 'deleted', resp)
    }, function() {
      console.log("error :(");
    });
  };
  
  return {
    getVideo: getVideo,
    deleteVideo: deleteVideo
  };
  
}];