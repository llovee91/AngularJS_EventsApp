angular.module('App')
  .controller('eventsController', eventsController)
  .controller('eventController', eventController)

eventsController.$inject = ['events']
eventController.$inject = ['events', '$routeParams']

var eventsList = []

function eventsController(events){
  var self = this
  self.api = events
  self.events = eventsList
  self.event = null

  self.searchEvent = function(query,price) {
    self.api.findEvent(query,price)
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

  self.showEvent = function(eventId) {
    self.api.showEvent(eventId)
      .success(function(response) {
        self.event = response
      })
  }
  self.showEvent($routeParams.eventId)

}
