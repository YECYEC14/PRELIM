const util = require('./newgrade');




const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\nEnter a grade? ', (answer) => {
    
// TODO: Log the answer in a database
  
  var grade = parseInt(answer);
  computeAge(grade,2);
  computeAge(age,3);
  
  rl.close();
});

function computeGrade(grade,increment){
    
    var test = grade + increment;
    
    
if(test < 75)
  console.log('After '+increment);


else if(test >75 && test<3)
  console.log('After '+increment);




else if(test >=75)
  console.log('After '+increment);


}