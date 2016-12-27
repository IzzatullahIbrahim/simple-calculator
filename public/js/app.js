'use strict'

var app = angular.module ('MyApp',['ui.router']);

app.config([
    '$stateProvider',
    function ($stateProvider){
        $stateProvider
            .state('home',{
            url:'/',
            templateUrl:'/templates/home.html'
            })
            .state('about',{
            url:'/about',
            templateUrl:'/templates/about.html'
            })
            .state('contact',{
            url:'/contact',
            templateUrl:'/templates/contact.html'
            })
            .state('calculator',{
            url:'/calculator',
            templateUrl:'/templates/calculator.html',
            controller:'MyApp.CalculatorController'
            })
    }
])

app.controller ('MyApp.CalculatorController',[
    '$scope',

    function ($scope){
        console.log('controller is working')
    }
])
