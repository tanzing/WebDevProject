var movies = angular.module("movies" , ['ngRoute']);

movies.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/series' , {
    templateUrl: '/series.html'
  })
  .when('/register',{
    templateUrl: '/register.html',
    controller: 'movienames'
  }).otherwise({
    redirectTo: ''
  })
}])

movies.controller('movienames',['$scope', function($scope){

  $scope.removeMovie = function(mve){
    var index = $scope.movie.indexOf(mve);
    $scope.movie.splice(index,1);    
  };


  
  
  $scope.movie = [
    {
      name: "Ex Machina",
      releaseyear: "2015",
      language: "English",
      available: true,
    },
    {
      name: "Blade Runner 2049",
      releaseyear: "2017",
      language: "English",
      available: true,      
    },
    {
      name: "Battle Royale",
      releaseyear: "2000",
      language: "Japanese",
      available: false, 
    },
    
  ]

  
  $scope.AddMovieToArray = function(x,y,z)
    {
      $scope.movie.push({
        name: x ,
        releaseyear: y,
        language: z,
        available: true,
      });
    };
  
}]);