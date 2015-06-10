
module.exports = ['$rootScope', function ($rootScope) {
  
  var saveUser = function () {
    $rootScope.userRef.set($rootScope.user);
  };
  
  var getUser = function () {
    $rootScope.user = $rootScope.userRef.val();
    console.log($rootScope.user);
  }
  
  var deleteUser = function () {
    $rootScope.userRef.set(null); // removes entire object
  };
  
  var updateUser = function (prop, obj) {
    $rootScope.userRef.child(prop).set(obj);
  };
  
  return {
    saveUser: saveUser,
    getUser: getUser,
    updateUser: updateUser,
    deleteUser: deleteUser
  };
  
}];