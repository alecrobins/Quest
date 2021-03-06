// Main Ctrl
angular.module('app')
  .controller('MainCtrl', ['$scope', function($scope) {

  //TEMP DB
  //================

    // For testing purposes only
    $scope.posts = [
      {
        user: {
          username: "alecrobins",
          profileImage: {
            url: "http://localhost:3000/assets/images/filler-profile.jpg"
          }
        },
        title: "This is a test title",
        date: "March 22",
        location: "Hanoi, Vietnam",
        chapter: "Test Chapter 1",
        excerpt: "This is ia asd fa dfa sd  a sdfl;aksjdf;lajksdfla. Asldf ajsdf la sldf alsdf a;. Test ata  s d fa sdnthisi a as d  asdflkasjl;znv , .zcv. zcv. adf   2 asdf asdf.",
        url: "http://www.google.com",
        likes: 998,
        featureImage: {
          url: "http://localhost:3000/assets/images/cow-filler.jpg"
        }
      },

      {
        user: {
          username: "alecrobins",
          profileImage: {
            url: "http://localhost:3000/assets/images/filler-profile.jpg"
          }
        },
        title: "TITLE number 2",
        date: "March 24",
        location: "Hanoi, Vietnam",
        chapter: "This is the best possible chapter name adj adf ad fad fa end",
        excerpt: "This is ia asd fa dfa sd  a sdfl;aksjdf;lajksdfla;   asldf ajsdf la sldf alsdf a;.",
        url: "http://www.google.com",
        likes: 1318,
        featureImage: {
          url: "http://localhost:3000/assets/images/cow-filler.jpg"
        }
      }

    ];

    $scope.locations = [
      {
        name: "Chicago"
      },
      {
        name: "Hanoi"
      },
      {
        name: "New York"
      },
      {
        name: "Chicago"
      },
      {
        name: "Hanoi"
      },
      {
        name: "New York"
      },
      {
        name: "Chicago"
      },
      {
        name: "Hanoi"
      },
      {
        name: "New York"
      },{
        name: "Chicago"
      },
      {
        name: "Hanoi"
      },
      {
        name: "New York"
      }
    ];

    $scope.tags = [
      {
        name: "PizzaTime"
      },
      {
        name: "TagHero"
      },
      {
        name: "BestPlaceEver"
      },
      {
        name: "WhereAmI"
      },
      {
        name: "HelloWorld"
      },
      {
        name: "PizzaTime"
      },
      {
        name: "TagHero"
      },
      {
        name: "BestPlaceEver"
      },
      {
        name: "WhereAmI"
      },
      {
        name: "HelloWorld"
      },
    ];



}]);
