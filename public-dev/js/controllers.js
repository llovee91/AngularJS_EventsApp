angular.module('App')
  .controller('eventsController', eventsController)

eventsController.$inject = ['events']

function eventsController(events){
  var self = this
  self.api = events
  self.events = []

  self.searchEvent = function(query,price) {
    console.log(price)
    console.log(query)
    self.api.findEvent(query,price)
      .success(function(response) {
        self.events = response.events
        console.log(self.events)
      })
  }


}
