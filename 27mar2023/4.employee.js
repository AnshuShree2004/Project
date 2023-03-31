class Employee{
    constructor(name,position,salary){
        this.name = name
        this.position = position
        this.salary = salary 
        
}

    getDetails(){
      return  `${this.salary} `
    }
}

let emp1 = new Employee('anshu','student',8000)
console.log(emp1.getDetails()) 
