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
// type User = {
//     name:string,
//     email:string,
// }
// type Admin = User & {
//     getDetails(user:string):void
// }

// function abcd(a:Admin){
//     a.getDetails
// }


// CLASSES AND OBJECTS
// .class definiton
// .constructor
// .access modifiers (public,private,protected)
// .readonly properties
// .optional properties
// .parameter properties
// .getteres and setteres
// .static members
// .abstract classes and methods


// class Device{
//     name="lg";
//     price=12000;
//     category = "digital";
// }
// let d1 = new Device()
// let d2 = new Device()


// class humanMaker{
//     // let age =0;
//     constructor(public name:string,public age:number=0){}

// }
// let h1 = new humanMaker('raj',23);


// class music {
//     constructor(public name:string ,public artist:string,public thumbnail:string="somethumbnail",public length:number, public free:boolean){}
   
// }
// let m1 = new music('chall chhaiya chhaiya','raj','',1200,false)


// USE OF THIS KEYWORD

// class abcd{
//     name="raj";
//         // this.ghij=12;

//     changeSomeStuff(){
//         // this.ghij=12;
//     }
//     changeSomeMoreStuff(){
//         console.log("hey");
        
//     }
// }

// class bottlemaker{
//     constructor(public name:string){
//         // this.name=name;
//     }
// }
// let b1=new bottlemaker('milton')

// PUBLIC & PRIVATE ACCESS MODIFIER

// class bottlemaker{
//     // constructor(public name:string){
//     //     this.name=name;
//     // }
//     constructor(private name:string){
//         this.name=name;
//     }
//     changing(){
//         this.name='raj'
//     }
// }
// let b1 = new bottlemaker('milton')
// b1.changing()


// class bottlemaker{
//     private halua:string='halua';
//     constructor(public name:string){}
// }
// class metalbottlemaker extends bottlemaker{
//     constructor(name:string){
//         super(name)
//     }
//     getvalue(){
//         console.log(this.name,this.halua);
        
//     }
// }
// let b1 = new metalbottlemaker('chilton');
// b1.getvalue

// PROTECTED

// class BottleMaker{
//     protected name="milton";
// }
// class MetalBottleMaker extends BottleMaker{
//     public material = "metal";
//     changeName(){
//         this.name="some other name";
//     }
// }

// let b1 = new MetalBottleMaker();
// b1.name="some more names of bottle";

// OPTIONAL PROPERTIES
// class User{
//     constructor(public readonly name:string){

//     }
//     changeName (){
//         this.name ="hellow"
//     }
// }
// let u1 = new User('harsh');

// CONSTRUCTOR
//access modifiers (public,private,protected)
// readonly properties
// optional properties
// parameter properties
// getters and setters
// static memberes
// abstract classes and methods


// class User{
//     constructor(public name:string,public age:number,public gender?:string){

//     }
// }
// let u1 =new User('raj',21,"male")

// getteres and setters

// class User{
//     constructor(public _name:string,public age:number,public gender?:string){

//     }
//     get name(){
//         return this._name;
//     }
//     set name(value:string){
//         this._name=value;
//     }//_name is liye likha h kyuki fir hum apne methods ka naam get or set likh skte h
// }
// let u1 =new User('raj',21,"male")
// u1.name 
// u1.name="raju"


// STATIC MEMORY
// class Shery{
//     static version =1.0;
//     static getRandomNumber(){
//         return Math.random();
//     }
// }


// ABSTRACT CLASSES
// class paytm{
//     constructor(protected amount:number,protected account :number){}
//     ispaymentvalid(amount:number){
//         return this.amount>0;
//     }
// }

// class cookingessentials{
//     constructor(protected gas:number,public gaskanaam:string){}

// }
// class sabji extends cookingessentials{

// }
// class cake extends cookingessentials{

// }


// FUNCTIONS
// function types
// optional and default parameters
// rest parameteres
// overloads


// function abcdef(name:string,age:number,cb:(arg:string)=>void){
//     cb('hey')
// }

// abcdef("raj",21,(arg:string)=>{
//     console.log(arg);
    
// })

// OPTIONAL AND DEFAULT PARAMETERS
// function abcdef(name:string,age:number,gender:string="not to be discloses"){
//     console.log(name,age,gender);
    
// }
// // function abcdef(name:string,age:number,gender?:string){

// // }

// abcdef("raj",21,'male')
// abcdef("raju",21,)


// REST PARAMETERS

// ...  rest/spread

// function sum(...arr:number[]){
//     console.log(arr[3]);   
// }
// sum(1,23,4,56,78,90,1,2)


// FUNCTION OVERLOADING

// function abcd (a:string):void;
// function abcd(a:string,b:number):number;

// function abcd(a:any,b?:any){
//     if(typeof a==="string"&& typeof b==="number"){
//         return 123
//     }
//     if(typeof a==="string"&& typeof b===undefined){
//         console.log("hey");
//     }
//     else throw new Error('something went wrong')
// }

// abcd('hey')
// abcd('hey',12);

// GENERICS
// generics functions
// generic interfaces
// generics classes

// function log<T>(val:T){
//     console.log(val)

// }
// log<string>('hey');

// INTERFACES
// interface Halua<T>{
//     name:string;
//     age:number;
//     key:T;
// }
// function abcd(obj:Halua<string>){

// }
// abcd({name:'foo',age:25,key:"agafjaio"})

// CLASSES

// class BottleMaker<T>{
//     constructor (public key:T){}
// }
// let b1 = new BottleMaker<string>("hey")
// let b2 = new BottleMaker<number>(12)
// console.log(b1,b2);


 // Another Example

//  "string"->string (X) but it is STRING LITERAL (T) 

//  function abcd <T>(a:T,b:T):T{
//     // return <T>"hey";
//     // return "hey" as T;
//     if(typeof a ==="string"){
//         a.
//     }
//  }
//  abcd<string>("hey","hello");

// MODULES

// exporting and importing modules
// default exports

// import {getDetails,addPayments}from "./payment";
// addPayments(12)


// import Payment from './payment';

// let a = new Payment(12);
// let B= new Payment(122);
// console.log(a,B);


// TYPE ASSERTION
// type casting
// non-null assertion operator


// let a:any=12;
// (<number>a).

// let a =Number('12');
// console.log(a);
// console.log(typeof a);


// non-null assertion operator
// let a:null | undefined | string;
// a="hey";
// a.

// TYPE GUARDS AND TYPESCRIPT UTILITY TYPES
// using typeof and instanceof 
// partial , required ,readonly

// type guard ->type narrowing
// function abcd(arg:string | number){
//     if(typeof arg ==="number"){
//         return "number";
//     }
//     else if(typeof arg ==="string"){
//         return "string";
//     }
//     else{
//         throw new Error('pagal how gaya hai fraaands')
//     }
// }
// console.log(abcd(12));
// console.log(abcd("helloew"));

// 

function switchOffKaro(device:tvkaremote | carkaremote){
    if(device instanceof tvkaremote){
        device.switchOffKaro();
    }
    else if(device instanceof carkaremote){
        device.switchOffKaro();
    }
}
switchOffKaro();