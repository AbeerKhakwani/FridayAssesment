  signIn.controller('teacherCtrl', function teacherCtrl($scope, $state,studentFactory){
  $scope.studentFactory=studentFactory;
  $scope.students= studentFactory.students;

  $scope.addNewStudent= function() {
	  var newName= $scope.newName;
	  $scope.studentFactory.addStudents(newName);
	  $scope.newName=null;
	  //$state.go('viewStudents');

	};
});
