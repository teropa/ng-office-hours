var app = angular.module('myApp', []);

app.controller('MyController', function() {

  this.myTitle = 'Dynamic title';
  this.myBody = 'Dynamic body';

  this.aFunction = function() {
    console.log('Called', this);
  };

});

app.controller('ExpandableSectionController', function($scope, $element) {
  $element.find('article').hide();
  $element.find('h2').click(function() {
    $element.find('article').toggle();
  });

});

app.directive('expandableSection', function() {
  return {
    restrict: 'E',
    template: '<section><h2>{{title}}</h2><article>{{body}}</article></section>',
    replace: true,
    scope: {
      title: '=sectionTitle',
      body: '=sectionBody',
      someFunction: '='
    },
    controller: 'ExpandableSectionController',
    link: function($scope) {
      $scope.someFunction();
    }
  };
});
