var myApp = angular.module('myApp', [
    'ngRoute'])
    config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        $routeProvider,when('/home',{templateUr1:'partials/home.html',controller:'homeController'});
        $routeProvider.otherwise({redirectTo:'/home'});

        $locationProvider.html5Mode({anabled:true,requireBase:false});
    }])