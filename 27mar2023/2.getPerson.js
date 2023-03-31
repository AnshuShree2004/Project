function getPerson(person){
try{
if(!person.name || !person.age){
    throw new Error("INVALID PARAMETER TYPE")
}
return `Name : ${person.name} , Age : ${person.age}`
} catch(err){
return err
}
}

console.log(getPerson({ name :'anshu' , age :20}))
console.log(getPerson({age :20}))
