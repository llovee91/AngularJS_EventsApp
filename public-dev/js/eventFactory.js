angular.module('App')
  .factory('events', events)

events.$inject = ['$http']

function events($http) {
  var oriUrl = 'https://www.eventbriteapi.com/v3/events/search/?token=MDHQ7SYGMAURGHOAEMCZ&popular=true&q='
  var priceParam = '&price='
  var events = {}

  events.findEvent = function(query, price) {
    var apiUrl = oriUrl+query+priceParam+price
    console.log(apiUrl)
    return $http.get(apiUrl)
  }

  return events
}
