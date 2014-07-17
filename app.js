var app = angular.module('myApp', []);

app.directive('expandableSection', function() {
  return {
    restrict: 'E',
    link: function($scope, $element) {
      $element.find('article').hide();
      $element.find('h2').click(function() {
        $element.find('article').toggle();
      });
    }
  };
});
