// --1
function greet(firstname:string){
    console.log("hello"+firstname);
}
greet("pankaj");

// -->2
function sum(a:number,b:number){
    console.log(a+b);
}
sum(4,9);

// -->3
interface User{
    firstname:string,
    lastname:string,
    email:string,
    age:number
}

function isLegal(age:number){
    if(age>18) return true;
    else return false;
}
// -->4
function isLegalUser(user:User):boolean{
    if(user.age>18) return true;
    else return false;
}

isLegal(24);

// -->5
function another(fn:()=>void){
    setInterval(fn,1000);
}

another(function(){
    console.log("hi there");
})

// -->6

function findMaxValue(arr:number[]){
    let mx=0;
    for(let i=0;i<arr.length;i++){
         mx=Math.max(mx,arr[i]);
    }
    return mx;
}
console.log(findMaxValue([1,2,3,4,4,6]));

// --> generics
function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase())

//--> enum
enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keyPressed: Direction) {
	// do something.
}

doSomething(Direction.Up)