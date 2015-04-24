signIn.controller('signInCtrl', function signInCtrl($scope, studentFactory){


  $scope.studentFactory=studentFactory;


  $scope.students= studentFactory.students;
$scope.studentFactory.addStudents("June Bug");
$scope.studentFactory.addStudents("Jane Doe");
$scope.studentFactory.addStudents("Erica Cha");
$scope.studentFactory.addStudents("Kelly De Vries");


  $scope.studentSignIn=function(item){
          item.isSigned=true;
  };
  $scope.studentSignOut=function(item){

          item.isSigned=false;
  };


});
