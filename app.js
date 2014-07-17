var app = angular.module('myApp', []);

app.directive('expandableSection', function() {
  return {
    restrict: 'E',
    template: '<section><h2>{{title}}</h2><article>{{body}}</article></section>',
    replace: true,
    link: function($scope, $element, $attrs) {
      $scope.title = $attrs.sectionTitle;
      $scope.body = $attrs.sectionBody;
      $element.find('article').hide();
      $element.find('h2').click(function() {
        $element.find('article').toggle();
      });
    }
  };
});
