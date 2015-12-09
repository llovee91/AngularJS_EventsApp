(function() {
  angular.module('App')
    .config(['$routeProvider', eventRoutes])

    eventRoutes.$inject = ['$routeProvider']

    function eventRoutes($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'partials/event-list.html',
            controller: 'eventsController',
            controllerAs: 'eventsCtrl'
          })
        .when('/events/:eventId', {
            templateUrl: 'partials/event-detail.html',
            controller: 'eventController',
            controllerAs: 'eCtrl'
        })
    }

}());
