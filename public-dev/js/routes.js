angular.module('App')
  .config(['$routeProvider', eventRoutes])

  eventRoutes.$inject = ['$routeProvider']

  function eventRoutes($routeProvider) {
    $routeProvider.
      when ('/', {
        templateUrl: 'partials/event-list.html',
        controller: 'eventsController',
        controllerAs: 'eventsCtrl'
      })
  }
