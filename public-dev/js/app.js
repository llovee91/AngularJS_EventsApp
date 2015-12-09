(function() {
  angular.module('App', ['ngRoute'])
    .directive('eventForm', eventForm)
    .filter('reverse', reverse)
    .filter('limit', limit)


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
