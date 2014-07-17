var app = angular.module('myApp', []);

app.controller('MyController', function() {

  this.myTitle = 'Dynamic title';
  this.myBody = 'Dynamic body';

});

app.directive('expandableSection', function() {
  return {
    restrict: 'E',
    template: '<section><h2>{{title}}</h2><article>{{body}}</article></section>',
    replace: true,
    scope: {
      title: '=sectionTitle',
      body: '=sectionBody'
    },
    link: function($scope, $element) {
      $element.find('article').hide();
      $element.find('h2').click(function() {
        $element.find('article').toggle();
      });
    }
  };
});
