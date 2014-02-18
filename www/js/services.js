angular.module('starter.services', [])
    .factory('vaaayql', function($q, $http) {
        var fixedEncodeURIComponent = function(str) {
            return encodeURIComponent(str).replace(/[!'()]/g, escape).replace(/\*/g, "%2A").replace(/\"/g, "%22");
        };
        var format = '&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK';

        return {
            all: function() {
                var deferred = $q.defer();
                var url = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20victoriaandalbert.place(2%2C45)%3B&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK';
                $http.jsonp(url).success(function(json) {
                    var results = json.query.results.records;
                    console.log(results);
                    deferred.resolve(results);
                }).error(function(error) {
                    });
                return deferred.promise;
            },
            getPlace: function(placeid) {
                var deferred = $q.defer();
                var query = 'select * from victoriaandalbert.museumobjectsearch(0,10) where place="' + placeid + '";';
                var url = 'http://query.yahooapis.com/v1/public/yql?q=' + fixedEncodeURIComponent(query) + format;
                $http.jsonp(url).success(function(json) {
                    var results = json.query.results.records;

                    deferred.resolve(results);
                }).error(function(error) {
                    });
                return deferred.promise;
            },
            getObject: function(objectid) {
                var deferred = $q.defer();
                var query = 'select * from victoriaandalbert.museumobject where id="' + objectid + '";';
                var url = 'http://query.yahooapis.com/v1/public/yql?q=' + fixedEncodeURIComponent(query) + format;
                $http.jsonp(url).success(function(json) {
                    var results = json.query.results;
                    console.log(results);
                    deferred.resolve(results);
                }).error(function(error) {
                    });
                return deferred.promise;
            }
        }
    });
