angular.module("countriesInfoApp", ['ngRoute']).config(config);

function config($routeProvider){
    $routeProvider.when("/", {
        templateUrl: "mainPage/main.html",
        controller: "mainController",
        controllerAs: "ctrl"
    // }).when("/about",{
    //     templateUrl: "about/about.html",
    //     controller: "aboutController",
    //     controllerAs: "aboutCtrl"
    // }).when("/", {

     })
}