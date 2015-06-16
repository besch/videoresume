
module.exports = ['$scope', '$rootScope', '$state', 'toaster',
  function ($scope, $rootScope, $state, toaster) {
  
  $scope.videoTitle = '';
  $scope.videoDescription = '';
  $scope.videoCategory;
  $scope.categories = [
    { id: 0, name: 'Introduction'},
    { id: 1, name: 'Education'},
    { id: 2, name: 'Experience'},
    { id: 3, name: 'Skills'},
    { id: 4, name: 'Hobbies'},
    { id: 5, name: 'Sports'},
    { id: 6, name: 'Languages'}
  ];
  
  $scope.$watch('videoTitle', function (n, o) {
    if(n) {
      $rootScope.videoTitle = n;
    }
  });
  
  $scope.$watch('videoDescription', function (n, o) {
    if(n) {
      $rootScope.videoDescription = n;
    }
  });
  
  $scope.$watch('videoCategory', function (n, o) {
    if(n) {
      $rootScope.videoCategory = n;
    }
  });
  
  $scope.goStep2 = function() {
    // console.log($scope.videoTitle, $scope.videoDescription, $scope.videoCategory)
    if($scope.videoTitle && $scope.videoDescription && $scope.videoCategory) {
      $state.go('form.step2');
      // validation
    }
  };
  
  $scope.goStep3 = function() {
    $state.go('form.step3');
  };
  
  $scope.$watch(function () {
    return $rootScope.processingVideo;
  }, function (n, o) {
    console.log('new val processingVideo', n);
    if (n && n != o) { 
      $scope.processingVideo = n;
      toaster.pop('warning', "Processing", 'Video processing... I can take a few moments', 5000, 'trustedHtml');
    }
  });
  
  $scope.$watch(function () {
    return $rootScope.processingVideoComplete;
  }, function (n, o) {
    if (n && n != o) { 
      $scope.processingVideoComplete = n; 
      toaster.pop('success', "Success", 'Video has been successfully uploaded on Youtube', 5000, 'trustedHtml');
    }
  });
  
}];