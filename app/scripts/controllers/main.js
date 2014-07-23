'use strict';

/**
 * @ngdoc function
 * @name whatsForLunchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the whatsForLunchApp
 */
angular.module('whatsForLunchApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
