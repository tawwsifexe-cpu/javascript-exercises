let result = [];
const removeFromArray = function(array, ...args) {




function removeFromArray(arr, ...args) {
  for (item of arr) {
    if (!args.includes(item)){
      result.push(item)
    }
  }
  return result
}




    
}



// Do not edit below this line
module.exports = removeFromArray;
