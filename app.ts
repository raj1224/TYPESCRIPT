// let a = 12;
// let a ="hello";


//BASIC types

// .primitves types(number,string,boolean)
// .arrays
// .tuples
// .enums
// .any,unknown,void,null,undefined,never

// let arr =[1,2,3,"harsh",{}] //num and string and object array.

// let arr:number[]=[1,24,5];

// let arr:[number,string]=[12,"sgtsa"];

// enumeration

// enum UserRoles{
//     ADMIN="admin",
//     GUEST="guest",
//     SUPER_ADMIN="super_admin"
// }

// enum StatusCodes{
//     ABANDONES="abandoned status code 500",
//     NOTFOUND ="not found status code 404"
// }
// StatusCodes.NOTFOUND

// 
// let a:number;
// a=12;
// a=true;

// ANY
// let b; //type-any
// b=12;
// b='sga'

// unknown
// let a:unknown;
// a=12;
// a="harsh";
// if(typeof a==="string")
//     a.toLowerCase();


// // function
// function abcd():boolean{
//     return true;
// }

// let a:null;
// a=12

// let a:string|null;
// a="raj";
// a=null;
// a=12;

// UNDEFINED
// let a:undefined;


// NEVER
// function abcd():never{
//     while(true){

//     }
// }
// abcd();
// console.log('hey');

//INTERFACES AND TYPE ALIASES
// .defining INTERFACES
// .using interfaces to define object shapes
// .extending interfaces.
// .type ALIASES
// .intersection types

// interface User{
//     name:String,
//     email:string,
//     password:string,
//     gender?:string //OPTIONAL
// }
// function abcd(obj:User){

// }
// abcd({name:"raj",email:"raj@gmail.com",password:"1234"});

// .extending interfaces.
// interface User{
//     name:String,
//     email:string,
//     password:string,
//     gender?:string //OPTIONAL
// }
// interface Admin extends User{
//     admin:boolean;
// }
// function abcd(obj:Admin){

// }


// interface abcd{
//     name:string;
// }

// interface abcd{
//     email:string;
// }
// function abcd(obj:abcd){

// }


// TYPE ALIASES
// type chacha = number:
// let a:chacha;
// type value = string | number |null;
// let a :value;

// INTERSECTION TYPES
type User = {
    name:string,
    email:string,
}
type Admin = User & {
    getDetails(user:string):void
}

function abcd(a:Admin){
    a.getDetails
}