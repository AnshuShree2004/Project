
let arr=[3,6,5,9,10,2]
for (let i = 0; i < arr.length; i++) {
  if(arr[i]%3==0 && arr[i]%2!=0) {
  console.log(arr[i])
    continue 
  }
}
