
(function() {
  angular.module('App')
    .controller('eventsController', eventsController)
    .controller('eventController', eventController)

  eventsController.$inject = ['events']
  eventController.$inject = ['events', 'videos','$routeParams']

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

  function eventController(events, videos, $routeParams) {
    var self = this
    self.api = events
    self.youtubeApi = videos
    self.event = null
    self.similarEvents = eventsList
    self.utubeLink = 'https://www.youtube.com/embed/'

    self.showEvent = function(eventId) {
      self.api.showEvent(eventId)
        .success(function(response) {
          self.event = response
          console.log(response.name)

          self.youtubeApi.findvideos('santa monica')
            .success(function(response) {
              console.log(response.items)
              self.utubeLink += response.items[0].id.videoId
            })
        })
    }
    self.showEvent($routeParams.eventId)

  }

}());
