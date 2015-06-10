
module.exports = ['$scope', '$rootScope', 
  function ($scope, $rootScope) {
  
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
  
}];