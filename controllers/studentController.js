signIn.controller('signInCtrl', function signInCtrl($scope, studentFactory){
	
  var name ="Abeer Khakwani";
  $scope.studentFactory=studentFactory;
  $scope.studentFactory.addStudents(name);
  $scope.studentFactory.addStudents("June Bug");
  $scope.studentFactory.addStudents("Jane Doe");
 
  $scope.students= studentFactory.students;
  $scope.studentSignIn=function(item){
          item.isSigned=true;
  };
  $scope.studentSignOut=function(item){

          item.isSigned=false;
  };

  
});