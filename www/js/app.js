// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'firebase', 'starter.controllers', 'ionic-datepicker', 'ionic-timepicker'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if(window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $ionicConfigProvider.backButton.text('').icon('ion-close-round').previousTitleText(false);
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })
            .state('signup-basicInfo', {
                url: '/signup-basicInfo',
                templateUrl: 'templates/signup-basicInfo.html',
                controller: 'signupBasicInfoCtrl',
                params: {
                    userModel: {}
                }
            })
            .state('signup-gender', {
                url: '/signup-gender',
                templateUrl: 'templates/signup-gender.html',
                controller: 'signupGenderCtrl',
                params: {
                    userModel: {}
                }
            })
            .state('signup-expertise', {
                url: '/signup-expertise',
                templateUrl: 'templates/signup-expertise.html',
                controller: 'signupExpertiseCtrl',
                params: {
                    userModel: {}
                }
            })
            .state('signup-goals', {
                url: '/signup-goals',
                templateUrl: 'templates/signup-goals.html',
                controller: 'signupGoalsCtrl',
                params: {
                    userModel: {}
                }
            })
            .state('today', {
                url: '/today',
                templateUrl: 'templates/today.html',
                controller: 'TodayCtrl'
            })
            .state('request', {
                url: '/request',
                templateUrl: 'templates/requests.html',
                controller: 'RequestCtrl'
            })
            .state('main', {
                url: '/main',
                templateUrl: 'templates/shell.html',
                controller: 'MainCtrl'
            })
            .state('main.home', {
                url: '/home',
                parent: 'main',
                views: {
                    'main-content': {
                        templateUrl: 'templates/home.html'
                    }
                }
            })
    })
