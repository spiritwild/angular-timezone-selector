/*global angular*/
var app = angular.module('demoApp', ['angular-timezone-selector'])

app.controller('AppCtrl', ['$scope', function ($scope) {
  $scope.timezone = 'Asia/Ho_Chi_Minh'
}])
