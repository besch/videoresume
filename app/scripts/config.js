
'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.when('/form', '/form/step1');

  $stateProvider
    // .state('steps', {
    //   url: '/steps',
    //   templateUrl: '/views/steps/index.html',
    //   controller: 'StepController',
    //   // abstract: true
    // })
    
    //     .state('steps.stepOne', {
    //       url: '/step-one',
    //       templateUrl: '/views/steps/stepOne.html',
    //       controller: 'StepController'
    //     })
    //     .state('steps.stepTwo', {
    //       url: '/step-two',
    //       templateUrl: '/views/steps/stepTwo.html',
    //       controller: 'StepController'
    //     })
        
    .state('form', {
        url: '/form',
        templateUrl: '/views/steps/form.html',
        controller: 'StepController'
    })
    
        .state('form.step1', {
            url: '/step1',
            templateUrl: '/views/steps/form-step1.html',
            controller: 'StepController'
        })
        
        .state('form.step2', {
            url: '/step2',
            templateUrl: '/views/steps/form-step2.html',
            controller: 'StepController'
        })
        
        .state('form.step3', {
            url: '/step3',
            templateUrl: '/views/steps/form-step3.html',
            controller: 'StepController'
        })
        
    .state('home', {
      url: '/home',
      templateUrl: '/views/home.html',
      controller: 'HomeController'
    })
    
    .state('video-management', {
      url: '/video-management',
      templateUrl: '/views/video-management.html',
      controller: 'VideoManagementController'
    })
    
    .state('overview', {
      url: '/overview',
      templateUrl: '/views/overview.html',
      controller: 'OverviewController'
    })
    
    .state('create-video-resume', {
      url: '/create-video-resume',
      templateUrl: '/views/create-video-resume.html',
      controller: 'OverviewController'
    })
    
    .state('login', {
      url: '/login',
      templateUrl: '/views/login.html',
      controller: 'LoginController'
    });

  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });
  
  
  $urlRouterProvider.otherwise('/');
    
}];
