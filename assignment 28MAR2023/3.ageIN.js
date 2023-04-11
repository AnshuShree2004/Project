 const personObject = {
    firstName : 'Anshu' ,
    lastName : 'Shree',
     age : 20,
}
function ageInDays(personObject,callback){
    const fullname =` ${personObject.firstName} ${personObject.lastName}`;
    const ageInDays = personObject.age*365;
  return  callback(fullname,ageInDays)
}

function logresult(fullName , ageInDays){
    console.log(`the person's full name is ${fullName} and their age in days is ${ageInDays}`)
}
