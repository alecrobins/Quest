// Main Ctrl
angular.module('app')
  .controller('EditorCtrl', ['$scope', 'postService', function($scope, postService) {

		$scope.test = "Hello world . . .";

    $scope.post = {};

    $scope.submit = function () {
      console.log($scope.post);
    }

}]);
