// Control the CRUD operations for posts
angular.module('app')
  .factory('postService', ['$resource', function($resource) {
    return $resource('/api/post/:_id');
  }]);
