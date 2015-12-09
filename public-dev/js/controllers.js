(function() {
  angular.module('App')
    .controller('eventsController', eventsController)
    .controller('eventController', eventController)

  eventsController.$inject = ['events','$scope']
  eventController.$inject = ['events', '$routeParams']

  var eventsList = []

  function eventsController(events){
    var self = this
    self.api = events
    self.events = eventsList
    self.event = null


    self.searchEvent = function(query,price,city,radius) {

      self.api.findEvent(query,price,city,radius)
        .success(function(response) {
          eventsList = response.events
          self.events = eventsList
        })
    }
  }

  function eventController(events, $routeParams) {
    var self = this
    self.api = events
    self.event = null
    self.similarEvents = eventsList

    self.showEvent = function(eventId) {
      self.api.showEvent(eventId)
        .success(function(response) {
          self.event = response
        })
    }
    self.showEvent($routeParams.eventId)

  }

}());
