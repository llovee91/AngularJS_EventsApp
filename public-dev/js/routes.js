(function() {
  angular.module('App')
    .config(['$routeProvider', eventRoutes])
    .config(['$sceDelegateProvider', sceDelegateProvider])

    eventRoutes.$inject = ['$routeProvider']
    sceDelegateProvider.$inject = ['$sceDelegateProvider']

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

    function sceDelegateProvider($sceDelegateProvider) {
      $sceDelegateProvider.resourceUrlWhitelist(['**'])
    }


}());
