// variable
var fullName = "jack";
fullName = 'john';
console.log(fullName);
var num;
num = 1;
console.log(num);
// array
var names = [];
names.push('hi');
console.log(names);
function sum(a, b) {
    return a + b;
}
// Tupples
var address;
address = [111, 'delhi', 21324];
// object
var person;
person = { name: 'john' };
var anotherPerson;
anotherPerson = { name: 'john', age: 30 };
anotherPerson = { name: 'john' };
function add(a, b) {
    return b ? a + b : a;
}
console.log(add('1', '2'));
console.log('1');
var p;
p = { name: 'john', age: 30, id: 1 };
var p1; // Union
p1 = { name: 'jack', age: 2, rollNo: 1 };
p1 = { name: 'jack', age: 2, id: 1 };
p1 = { name: 'jack', age: 2, rollNo: 1, id: 2 };
var p2; // Intersection
p2 = { name: 'jack', age: 2, id: 1, rollNo: 2 };
var c;
c = 1;
c = "one";
var n = []; // never array
//n.push('hi');
// class
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return Car;
}());
var c1 = new Car('Audi');
c1.getBrand();
