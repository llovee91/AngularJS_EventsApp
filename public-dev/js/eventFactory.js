(function() {
  angular.module('App')
    .factory('events', events)

  events.$inject = ['$http']

  function events($http) {
    var searchUrl = 'https://www.eventbriteapi.com/v3/events/search/?token=MDHQ7SYGMAURGHOAEMCZ&popular=true&q='
    var priceParam = '&price='
    var cityParam = '&location.address='
    // var longitudeParam = '&location.longitude='
    // var latitudeParam = '&location.lagitude='
    var withinParam = '&location.within='
    var events = {}

    events.findEvent = function(query, price, city, radius) {
      if (radius === undefined) {
        radius = 10
      }
      if (query === undefined) {
        query = "any"
      }
      var apiUrl =
      searchUrl+query+priceParam+price+cityParam+city+withinParam+radius+'mi'
      console.log(apiUrl)
      return $http.get(apiUrl)
    }

    events.showEvent = function(eventId) {
      var apiUrl = 'https://www.eventbriteapi.com/v3/events/'+eventId+'/?token=MDHQ7SYGMAURGHOAEMCZ'
      return $http.get(apiUrl)
    }

    return events
  }

}());
