//Basic Types
let id: number = 5
let company: string = "Traversy Media"
let inPublished: boolean = true
let x: any = "Hello"    //any type

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, "Hello"]

//Tuple
let person: [number, string, boolean] =  [1, "Brad", true] //Have to be in order
//Tuple array
let employee: [number, string][]
    employee = [
        [1, 'Brad'],
        [2, 'John'],
        [3, 'Jill'],
    ]


//Union
let productID: string | number // either or - both will work
productID = 22
productID = "22"

//Enum - enumerated type - Define a set of named constants numaric or string

enum Direction1{
    Up = 1, //default is 0 but you can change it
    Down,   //would be 2 
    Left,   //should be 3
    Right   //should be 4
}
//console.log(Direction1.Up)

enum Direction2{
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}
//console.log(Direction2.Left)

//Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

//Type Assertion
let cid: any = 1
//let customerID = <number>cid
let customerID = cid as number

//Functions
function addNum(x:number,y:number): number{ //both x, y and the return have to be numbers
    return x + y
}
//console.log(addNum(1,2))
//console.log(addNum("Hello", 5)) //doesn't work because of string

//Void
function log(message: string | number): void{
    console.log(message)
}
log(123)
log("Hello")
//log(true) //Boolean doesn't work

//Interface  -- ususally used with objects -- Interface doesn't work with primitives or unions
interface UserInterface  {
    readonly id: number, // readonly means only read don't display
    name: string
    age?: number    //the ? means optional
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}
user1.name = "Smith"

interface MathFunc{ //interface with function
    (x: number, y: number):number
}
const add: MathFunc = (x:number, y:number): number => x + y
const sub: MathFunc = (x:number, y:number): number => x - y


//Classes
class Person {  //defined class with key word
    id: number  //property
    name: string //property

    constructor(id:number, name:string){    //constructor that is a method/functions with in the class
        this.id = id
        this.name = name
    }
}

const Brad = new Person(1, "Brad Traversy") //goes to the person class and throught the constructor making a new object
const Mike = new Person(2, "Mike Jordan")

console.log(Brad, Mike)


    //Modifiers
        //public, private or protected

class Person1 {  
    private id: number  //private - only access within class
    protected name: string //protected can only be used in the class or anything extented from this class

    constructor(id:number, name:string){    
        this.id = id
        this.name = name
    }
}
const Brad1 = new Person1(1, "Brad Traversy")
const Mike1 = new Person1(2, "Mike Jordan")
console.log()


            //Another function/method - Register
            //add interface
interface Person2Interface  {
id: number, 
name: string
register(): string

            }
class Person2 implements Person2Interface { 
    id: number  
    name: string 

    constructor(id:number, name:string){    
        this.id = id
        this.name = name
    }

    register(){
        return `${this.name} is now registered`
    }
}

const Brad2 = new Person2(1, "Brad Traversy") 
const Mike2 = new Person2(2, "Mike Jordan")

console.log(Brad2.register())