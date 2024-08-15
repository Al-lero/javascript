function reverseArray(array) {
  let reversed = []
  
  
  for (num in array) {
    reversed.unshift(array[num]);
  }
  return reversed
}
    
module.exports = reverseArray
 

  
 

