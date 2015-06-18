

module.exports = ['GData', 'GAuth', '$rootScope', '$state', 'constants', '$window', '$sessionStorage',
  function (GData, GAuth, $rootScope, $state, constants, $window, $sessionStorage) {
  
  var getUser = function () {
    $rootScope.user = GData.getUser();
    console.log('--User--', $rootScope.user);
  };
  
  var setUser = function (user) {
    return $rootScope.userRef = user;
  }
  
  var isLogin = function () {
    // console.log('is login? ', GData.isLogin())
    // return GData.isLogin();
    return console.log($rootScope.user && $rootScope.userRef);
  }
  
  var logout = function () {
    return GAuth.logout();
  }
  
  var buildUserUrl = function () {
    var url = constants.firebase;
    var ref = new Firebase(url);
    // $rootScope.userRef = $sessionStorage.userRef = ref.child('users').child($rootScope.user.id);
    $rootScope.userRef = ref.child('users').child($rootScope.user.id);
    // $window.userRef = $rootScope.userRef; // for testing. REMOVE
  }
  
  var login = function() {
    
    if(isLogin()) return;

    GAuth.login()
    .then(function(){
      
      getUser();
      buildUserUrl();
      console.log('You are logged in as ', $rootScope.user.name );
    }, function() {
      console.log('Login failure')
      // return state.go('login');
    })
    .then(function() {
      $state.go('form');
    })
  };
  
  return {
    getUser: getUser,
    isLogin: isLogin,
    login: login,
    logout: logout
  }
}];