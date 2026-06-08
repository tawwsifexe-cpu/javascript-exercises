const sumAll = function(num1 , num2) {

    let num3 = 0;
  
  if (num1 < num2 && num1 >=0 && num2 >= 0 && Number.isInteger(num1) && Number.isInteger(num2)) {
      for (let i = num1; i <= num2; i++) {
          num3 += i
      }     
  } else if (num2 < num1 && num1 >=0 && num2 >= 0 && Number.isInteger(num1) && Number.isInteger(num2)) {
        for (let i = num2; i <= num1; i++) {
          num3 += i
  }
  }
   else {
    return "ERROR"
  }
  
return num3



};

// Do not edit below this line
module.exports = sumAll;
