signIn.factory('studentFactory', function studentFactory(){
   var factory={};
   factory.students=[{name:"Abeer",isSigned:false},{name:"Liz Beacham",isSigned:false},{name:"Kelly De Vries",isSigned:false},{name:"Erica Cha",isSigned:false},{name:"Kenna",isSigned:false}];
   factory.addStudents= function(name){
      factory.students.push({name:name , isSigned:false});
   };


   return factory

});
