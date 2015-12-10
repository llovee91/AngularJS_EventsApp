
(function() {

  angular.module('App')
    .factory('videos', videos)

  videos.$inject = ['$http']

  function videos($http) {
    var searchUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCfKtniWGi9qpGlw2Ll_FXNkKKfY1Hnl3E&maxResults=1&q='
    var videos = {}
    videos.findvideos = function(query) {
      var apiUrl = searchUrl+query
      return $http.get(apiUrl)
    }
    return videos
  }
}());
