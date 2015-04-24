signIn.controller('signInCtrl', function signInCtrl($scope, studentFactory){

  $scope.studentFactory=studentFactory;
  $scope.students= studentFactory.students;
  $scope.studentSignIn=function(item){
          item.isSigned=true;
  };
  $scope.studentSignOut=function(item){
          item.isSigned=false;
  };

});
