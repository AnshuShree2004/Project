class Person{
    constructor(name ='Unknown',age =0){
        this.name = name
         this.age = age
        
}

    getDetails(){
      return  `Name :${this.name}, Age :${this.age}  `
    }
}

let person1 = new Person('anshu',18)
console.log(person1.getDetails()) 

let person2 = new Person()
console.log(person2.getDetails())
