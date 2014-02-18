angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])


    .config(function($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider
            .state('discover', {
                url: '/discover',
                templateUrl: 'templates/discover.html',
                controller: 'DiscoverCtrl'
            })

            .state('discover-detail', {
                url: '/discover/:discoverId',
                templateUrl: 'templates/discover-detail.html',
                controller: 'DiscoverDetailCtrl'
            })

            .state('object-detail', {
                url: '/object/:objectId',
                templateUrl: 'templates/object.html',
                controller: 'ObjectCtrl'
            });
        $urlRouterProvider.otherwise('/discover');

    });

