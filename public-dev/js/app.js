(function() {
  angular.module('App', ['ngRoute'])
    .directive('eventForm', eventForm)
    .directive('eventList', eventList)
    .directive('eventDetail', eventDetail)
    .filter('reverse', reverse)
    .filter('limit', limit)

  function eventList() {
    var directive = {
      restrict: 'E',
      templateUrl: 'partials/event-list.html'
    }
    return directive
  }

  function eventDetail() {
    var directive = {
      restrict: 'E',
      templateUrl: 'partials/event-detail.html'
    }
    return directive
  }
  function eventForm() {
    var directive = {
      restrict: 'E',
      templateUrl: '/partials/event-form.html'
    }
    return directive
  }

  function limit() {
    return function(items) {
      return items.slice(0,10)
    }
  }

  function reverse(){
    return function(items) {
      return items.slice().reverse()
    }
  }

}());
