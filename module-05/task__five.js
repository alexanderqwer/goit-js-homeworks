class Car {
    static getSpecs(car) {
        console.log(
            `Spec | Max speed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${
          car.isOn
        }, distance: ${car.distance}, price: ${car.price}`,
        );
    }
    constructor({
        speed = 0,
        price,
        maxSpeed,
        isOn = false,
        distance = 0
    }) {
        this.speed = speed;
        this._price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;
    }
    get price() {
        return this._price;
    }
    set price(amount) {
        this._price = amount;
    }
    turnOn() {
        this.isOn = true;
    }
    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }
    accelerate(value) {
        this.isOn = true;
        this.speed += value;
        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
    }
    decelerate(value) {
        this.isOn = true;
        this.speed -= value;
        if (this.speed < 0) {
            this.speed = 0;
        }
    }
    drive(hours) {
        if (this.isOn) {
            this.distance = this.distance + this.speed * hours;
        }
    }
}
const mustang = new Car({
    maxSpeed: 200,
    price: 2000
});

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

mustang.accelerate(180);
mustang.drive(2);
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 180, isOn: true, distance: 490, price: 4000

mustang.accelerate(40);
mustang.drive(2);
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 200, isOn: true, distance: 890, price: 4000

mustang.decelerate(100);
mustang.drive(1);
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 100, isOn: true, distance: 990, price: 4000

mustang.turnOff();
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 990, price: 4000