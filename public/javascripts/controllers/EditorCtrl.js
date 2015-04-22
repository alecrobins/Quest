// Editor controller Ctrl
var editorCtrl = angular.module('app')
  .controller('EditorCtrl', ['$scope', 'postService', function($scope, postService) {

    $scope.post = {
      test: "",
      content: ""
    };

}]);
