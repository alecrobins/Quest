// Main Ctrl
var navCtrl = angular.module('app')
  .controller('NavCtrl', ['$scope',  '$location', function($scope, $location) {

    //nav links - determine which animation to run on click based on the current page
      $scope.go = function (path) {
        if (path === 'back') { // Allow a 'back' keyword to go to previous page
          $window.history.back();
        }
        else { // Go to the specified path
          $location.path(path);
        }
      };

    // links to main pages
    $scope.links = [
      {
        name: "Editor",
        url: "/editor"
      },
      {
        name: "World",
        url: "/world"
      }
    ];

    //TESTING
    //============
    $scope.currentUser = {
      profileImage: {
        url: "assets/images/me-filler.jpg"
      }
    }

}]);
