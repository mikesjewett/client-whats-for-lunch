'use strict';

/**
 * @ngdoc function
 * @name whatsForLunchApp.controller:GroupsCtrl
 * @description
 * # GroupsCtrl
 * Controller of the whatsForLunchApp
 */
angular.module('whatsForLunchApp')
  .controller('GroupsCtrl', ['$scope', 'Group', function ($scope, Group) {
    $scope.groups = Group.query();
  }]);
