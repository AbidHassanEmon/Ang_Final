var app = angular.module("myApp", ["ngRoute"]);
app.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider) {

    $routeProvider
    .when("/departments", {
        templateUrl : "views/pages/departments.html",
        controller: 'departments'
    })
    .when("/Cars", {
        templateUrl : "views/pages/Cars.html",
        controller: 'Cars'
    })
    .when("/Addcars", {
        templateUrl : "views/pages/AddCars.html",
        controller: 'Addcars'
    })
    .otherwise({
        redirectTo:"/"
    });

}]);
