interface Todotype{
    title:string,
    description:string,
    done:boolean
}
interface Todoinput{
    todo:Todotype
}

function Todo({todo}:Todoinput){
    return <div>
        <h2>{todo.title}</h2>
        <h2>{todo.description}</h2>
    </div>
}


// types in ts which let you aggregate data together with extra functionality
// type User = {
// 	firstName: string;
// 	lastName: string;
// 	age: number
// }

// Intersection

// type Employee = {
//     name: string;
//     startDate: Date;
//   };
  
//   type Manager = {
//     name: string;
//     department: string;
//   };
  
//   type TeamLead = Employee & Manager;
  
//   const teamLead: TeamLead = {
//     name: "harkirat",
//     startDate: new Date(),
//     department: "Software developer"
//   };


// Union
    // type StringOrNumber = string | number;

    // function printId(id: StringOrNumber) {
    //   console.log(`ID: ${id}`);
    // }

    // printId(101); // ID: 101
    // printId("202"); // ID: 202