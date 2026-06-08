const reverseString = function(text) {

  let textLength = text.length

let reversed = ""

for (let i = textLength; i >= 0; i--) {
    reversed += text.charAt(i)
}
return reversed



};

// Do not edit below this line
module.exports = reverseString;
