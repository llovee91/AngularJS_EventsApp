angular.module('App')
  .factory('events', events)

events.$inject = ['$http']

function events($http) {
  var searchUrl = 'https://www.eventbriteapi.com/v3/events/search/?token=MDHQ7SYGMAURGHOAEMCZ&popular=true&q='
  var priceParam = '&price='
  var events = {}

  events.findEvent = function(query, price) {
    var apiUrl = searchUrl+query+priceParam+price
    return $http.get(apiUrl)
  }

  events.showEvent = function(eventId) {
    var apiUrl = 'https://www.eventbriteapi.com/v3/events/'+eventId+'/?token=MDHQ7SYGMAURGHOAEMCZ'
    return $http.get(apiUrl)
  }

  return events
}
