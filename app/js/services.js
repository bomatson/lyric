'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  factory('Lyric', function(){
      var lyrics = {}

      lyrics.parse = function(data) {
        return data
      }

      return lyrics
    }
  );
