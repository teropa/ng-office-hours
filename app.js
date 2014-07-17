var app = angular.module('myApp', []);

app.directive('expandableSection', function() {
  return {
    restrict: 'E',
    template: '<section><h2>Title</h2><article>Body</article></section>',
    replace: true,
    link: function($scope, $element) {
      $element.find('article').hide();
      $element.find('h2').click(function() {
        $element.find('article').toggle();
      });
    }
  };
});
