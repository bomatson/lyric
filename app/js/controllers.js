'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('mainCtrl', ['$scope', '$http', 'Lyric', function($scope, $http, Lyric) {
    $scope.search = function(query) {
      $http({
        url: 'https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/track.search',
        method: 'GET',
        params: {  page_size: 5, page: 1, q: query || '' }
      }).success( function(data) {
        $scope.results = Lyric.parse(data)
      });
    }
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
