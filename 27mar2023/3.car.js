class Car{
    constructor(year,model,company){
        this.year = year
        this.model = model
        this. company= company
}

    getDescription(){
      return  `THIS IS A ${this.year},${this.model},${this. company}`
    }
}

let myCar = new Car(2022,'Rapid','Skoda')
console.log(myCar.getDescription())
