const x: number = 1;
// console.log(x);

function greet(firstName: string){
    console.log("Hello " + firstName);
    
}

// greet("usman")

function sum(a: number, b: number){
    return a + b
}

// const value = sum(2, 5)
// console.log(value);

// function isLegal(age: number): boolean{
//     if(age<18){
//         return false
//     } else{
//         return true
//     }
// }
// console.log(isLegal(2));

function runAfter1s(fn: () => void){
    setTimeout(fn, 1000)
}

// runAfter1s(function(){
//     console.log("hi there");
// })


//interface
interface User {
	firstName: string;
	lastName: string;
	age: number;
    email?: string   //user can pass it or not optional
}

function isLegal(user: User) {
    if (user.age > 18) {
        return true
    } else {
        return false;
    }
}

isLegal({
    firstName: "usman",
    lastName: "siddiqui",
    age: 23
})


//types:- very similar to interfaces 
//types can't be used to implement classes but only inerfaces can be used to implement classes

type User1 = {
    firstName: string,
    lastName: string,
    age: number
}

// 1)Unions
// Let’s say you want to print the id of a user, which can be a number or a string.

type StringOrNumber = string | number;

function printId(id: StringOrNumber) { //or id: string | number
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202

// 2)Intersection
// What if you want to create a type that has every property of multiple types/ interfaces
type Employee = {
    name: string;
    startDate: Date;
  };
  
  type Manager = {  //or interface Manager {}
    name: string;
    department: string;
  };
  
  type TeamLead = Employee & Manager;
  
  const teamLead: TeamLead = {
    name: "usman",
    startDate: new Date(),
    department: "Software developer"
  };
  

//   Arrays in TS
// Given an array of positive integers as input, return the maximum value in the array
// Solution
function maxValue(arr: number[]) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

// console.log(maxValue([1, 2, 3]));


// Given a list of users, filter out the users that are legal (greater than 18 years of age)
interface User {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User[]) {
    // return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));

// Enums:-(short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.

enum Direction {
    Up, //0
    Down, //1
    Left, //2
    Right //3
}

// How to change values?
// enum Direction {
//     Up = 1,
//     Down, // becomes 2 by default
//     Left, // becomes 3
//     Right // becomes 4
// }

// Can also be strings
// enum Direction {
//     Up = "UP",
//     Down = "Down",
//     Left = "Left",
//     Right = 'Right'
// }

function dosomthing(keyPressed: Direction){
    if(keyPressed === Direction.Up){
        //do somthing
    }
}

dosomthing(Direction.Up)
dosomthing(Direction.Down)
// console.log(Direction.Up);
// console.log(Direction.Down);

// Common usecase in express

// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }
// app.get("/", (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })

// Generics

function identity<T>(arg:T): T{
    return arg;
}

const output1 = identity<string>("usman");
const output2 = identity<number>(123)

console.log(output1.toUpperCase());
console.log(output2);


function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement(["mohd", "usman"]);
console.log(el.toLowerCase())