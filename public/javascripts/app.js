// Set up Angular app
angular.module('app', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap'])
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

		// This removes the '#' from the URL
		$locationProvider.html5Mode(true);

		// Set up the routes
		$routeProvider
	  .when('/', {
	    templateUrl: 'views/home.html',
	    controller: 'MainCtrl'
	  })
	  .when('/post/:pid', {
	    templateUrl: 'views/post.html',
	    controller: 'PostCtrl'
	  })
		.when('/post/:pid/edit', {
			templateUrl: 'views/editor.html',
			controller: 'EditorCtrl'
		})
		.when('/create', {
			templateUrl: 'views/editor.html',
			controller: 'EditorCtrl'
		})
		.when('/profile', {
			templateUrl: 'views/profile.html',
			controller: 'ProfileCtrl'
		})
		.when('/search', {
			templateUrl: 'views/search.html',
			controller: 'SearchCtrl'
		})
		.when('/world', {
			templateUrl: 'views/world.html',
			controller: 'WorldCtrl'
		})
	  .when('/login', {
	    templateUrl: 'views/login.html',
	    controller: 'LoginCtrl'
	  })
	  .when('/signup', {
	    templateUrl: 'views/signup.html',
	    controller: 'SignupCtrl'
	  })
		.when('/test',{
			tempalteUrl: 'views/test.html'
		})
	  // .otherwise({
	  //   redirectTo: '/'
	  // });
  }]);
