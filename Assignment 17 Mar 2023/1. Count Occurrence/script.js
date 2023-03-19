const countOccurrence = (string)=>{
    let list=new Set(string.split(''))
    let result=new Map()
    count =0
    for(item of list){
        for(let i=0;i<string.length;i++){ if(item===string[i]) count++
        }
        result.set(item,count)
        count=0
    }
    return result
}
console.log(countOccurrence("Happy people"))
