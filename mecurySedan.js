//this includes the vehicle class as a module
const VehicleModule = require("./vehicle.js")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule.Vehicle {
    constructor(maxPassengers, passenger, numWheels, maxSpeed, fuel, schedService) {
        super(this.make, this.model, this.year, this.color, this.mileage);
        this.maxPassengers = maxPassengers;
        this.passenger = passenger;
        this.numberOfWheels = numWheels;
        this.maxSpeed = maxSpeed;
        this.fuel = fuel;
        this.schedService = schedService;
    }
    loadPassenger() {

    }
    start() {

    }
    schedService() {

    }
}

let A28Mercury = new Car(5, 0, 4, 160, 10, false)

console.log(A28Mercury)