function convertToNumber(str){ 
    
        if (Number(str)) {
            return Number(str)
        } else {
          return "invalid number"  
        }
     }
console.log(convertToNumber('123'))
console.log(convertToNumber('abc'))
