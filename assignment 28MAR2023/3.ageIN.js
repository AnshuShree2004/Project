function logresult(person){
    console.log("the person's fullname is",fullname,"and their age in",ageInDays)
}
function ageInDay(person,callback){
    let fullname = person.first+person.last;
    let ageInDays = person.year*365
    return logresult(person)
}
let person ={
    first : person.first ,last : person.last , year : person.year,
}
console.log(ageInDay(person,logresult))