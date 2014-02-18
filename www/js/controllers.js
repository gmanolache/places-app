'use strict';
angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
    .controller('DiscoverCtrl', function($scope, vaaayql) {
        $scope.discoveries = [];
        var promise = vaaayql.all();

        promise.then(function(data) {
            $scope.discoveries = data;
        });
        $scope.thumbFilter = function (item) {
            return item.replace(".jpg", "_jpg_o.jpg")
        };
    })

    .controller('ObjectCtrl', function($scope, $stateParams, vaaayql) {
        $scope.object = [];
        var prom = vaaayql.getObject($stateParams.objectId);
        prom.then(function(data) {
            $scope.object = data;
        });
    })

    .controller('DiscoverDetailCtrl', function($scope, $stateParams, vaaayql) {
        $scope.discoveries = [];
        $scope.objects = [];
        $scope.place = $stateParams.discoverId;
        $scope.thumbFilter = function (item) {
            return item.replace(".jpg", "_jpg_o.jpg")
        };

        var promise = vaaayql.getPlace($scope.place);

        promise.then(function(data) {
            $scope.discoveries = data;
            for(var index = 0; index < $scope.discoveries.length; index++ ) {
                var prom = vaaayql.getObject($scope.discoveries[index].fields.object_number);
                prom.then(function(data) {
                    $scope.objects.push(data);
                });
            }
        });
    });
