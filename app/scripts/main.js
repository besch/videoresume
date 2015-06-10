'use strict';

window.jQuery = window.$ = require('./lib/jquery.min.js');
require('./lib/semantic/semantic.min.js');
var angular = require('angular');

require('angular-bootstrap');
require('angular-route');
require('angular-animate');
require('angular-ui-router');
require('ng-resource');
require('ng-cookies');
require('./lib/client.js');
require('./lib/angular-google-gapi.js');
// require('./lib/semantic-dropdown.js');
// require('./lib/angular-youtube-embed.js');
require('./lib/firebase.js');
require('./lib/angularfire.min.js');

var app = angular.module('videoresume', [
  'firebase', 
  'angular-google-gapi', 
  // 'youtube-embed', 
  'ngRoute', 
  'ngAnimate', 
  'ui.router',
  'ui.bootstrap',
  // 'angularify.semantic.dropdown'
]);

app.constant('constants', require('./constants.js'));

app.run(require('./run.js'));
app.config(require('./config.js'));

app.directive('uploadWidget', require('./directives/UploadWidget'));

app.service('AuthHelpers', require('./services/AuthHelpers'));
app.service('UserService', require('./services/UserService'));
app.service('VideoService', require('./services/VideoService'));
app.service('YoutubeService', require('./services/YoutubeService'));

app.controller('OverviewController', require('./controllers/OverviewController'));
app.controller('LoginController', require('./controllers/LoginController'));
app.controller('StepController', require('./controllers/StepController'));
app.controller('VideoManagementController', require('./controllers/VideoManagementController'));
