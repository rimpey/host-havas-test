'use strict';

// Declare app level module which depends on views, and core components
const myApp = angular.module('myApp', []);

// Creating a controller injecting the variable scope by name so not minified
// scope object is provided via Angular to attach data accessible
// create a property of selectedBlock to be used in the template
// declare a function selectBlock1 when called will reset panels to full height
// toggle between selected/unselected block

myApp.controller('TestController', ['$scope', ($scope) => {
  $scope.selectedBlock = 0;
  $scope.selectedSideBar = false;

  // click for panels
  $scope.selectBlock = (block) => {
    // second click reset all panels to display
    if ($scope.selectedBlock)
      $scope.selectedBlock = 0;
    else
      $scope.selectedBlock = block;
  };

  // click for side bar
  $scope.selectSideBar = () => {
    // toggle class on side bar to show and hide
      $scope.selectedSideBar = !$scope.selectedSideBar ;
  };

}]);