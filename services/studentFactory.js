signIn.factory('studentFactory', function studentFactory(){
   var factory={};
   factory.students=[];
   factory.addStudents= function(name){
      factory.students.push({name:name , isSigned:false});
   };
   return factory

});