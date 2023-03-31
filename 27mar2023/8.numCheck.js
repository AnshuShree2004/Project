function numCheck(arr){
    return function check(num){
        if(arr.includes(num)){
            return true
        } else {
            return false
        }
    }
}

let arr =[1,2,3,4,5]
console.log(numCheck(arr)(3))
console.log(numCheck(arr)(7))
