var signIn = angular.module('signIn', ['ui.router']);

signIn.config(function($stateProvider) {
    $stateProvider.state("home", {
        url:"",
        templateUrl: "partials/home.html"
    });
    $stateProvider.state("viewStudents", {
        url:"/students",
        templateUrl: "partials/viewStudents.html",
        controller: "signInCtrl"
        

    });
    $stateProvider.state("addStudent", {
        url: "addStudent",
        templateUrl: "partials/addStudent.html",
        controller: "teacherCtrl"
    
    });
});