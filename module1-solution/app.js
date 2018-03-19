(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.name = "";
  $scope.stateOfBeing = "hungry";
  

  $scope.sayMessage = function() {
    return "Enjoy!";
  };
  $scope.feedYaakov = function() {
  	$scope.stateOfBeing = "fed";
  };
}

})();