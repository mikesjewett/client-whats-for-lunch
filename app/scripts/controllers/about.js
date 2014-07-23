'use strict';

/**
 * @ngdoc function
 * @name whatsForLunchApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the whatsForLunchApp
 */
angular.module('whatsForLunchApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
