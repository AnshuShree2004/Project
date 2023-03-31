class Student{
    constructor(name){
        this.name = name
    }

}

 Student.prototype.printDetails = function(){
    console.log(`Hello !! my name is ${this.name}`)
}

let student1 = new Student('anshu')
student1.printDetails()
