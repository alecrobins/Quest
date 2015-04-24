// Editor controller Ctrl
var editorCtrl = angular.module('app')
  .controller('EditorCtrl', ['$scope', 'postService', function($scope, postService) {

    $scope.test = "hello";

    $scope.post = {
      chapter: null,
      location: null,
      title: null,
      content: null
   	};

    var helloTest = $scope.post;

    $scope.$watch("post.chapter", function(newValue, oldValue) {
        console.log($scope.post);
    });

}]);
