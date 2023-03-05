// variable
let fullName : string = "jack";

 fullName = 'john';

 console.log(fullName);

 let num : number;
 num = 1;
 console.log(num);

// array
 const names: string[] =[];
 names.push('hi');

 console.log(names);


 function sum (a:number, b:number): number{
    return a+b;
 }


 // Tupples
 let address : [number, string,number];
 address = [111, 'delhi', 21324]


 // object
 let person : {name:string};
 person = {name: 'john'};


 let anotherPerson : {name: string, age?:number};
  anotherPerson = {name:'john', age:30};
 anotherPerson = {name: 'john'};

 function add(a: string, b?: string){
    return b? a+b : a;
 }
 console.log(add('1','2'));
 console.log('1');

 // interface

 interface Person{
    name: string;
    id: number;
    age: number;
 }
 let p: Person;
 p = {name: 'john', age:30, id:1};

 interface Student{
    name: string;
    rollNo: number;
    age: number;
 }

 let p1 : Person | Student; // Union
 p1 = {name: 'jack', age: 2, rollNo:1}
 p1 = {name: 'jack', age: 2, id:1}
  p1 = {name: 'jack', age: 2, rollNo:1, id:2}



  let p2 : Person & Student;  // Intersection

  p2 = {name: 'jack', age:2, id:1,rollNo:2}


// Type alias

type Count = string | number;
let c: Count;

c=1;
c="one"
//c=false  // this is wrong

type x = string & number; // never

const n:[]=[]; // never array
//n.push('hi');

// class

class Car{
   brand;
   constructor(brand){
      this.brand = brand;
   }
   getBrand(){
      console.log(this.brand)
   }
}

let c1 = new Car('Audi');

c1.getBrand();





 