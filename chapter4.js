                               //Object
// inttroduction to object in javascript 

// let car={
//     color:"black",
//     company:"tesla",
//     price:20000
// }

// console.log(car["color"])
// //the above way is one of the way how we can access the keyy
// console.log(car.company)
// //there is way how we can change the access property name
// let property_name="company"
// console.log(car[property_name]) // we can simply change the property_name to access the key of car
 
// //Modify the object using . operator
// car.color="red"
// console.log(car.color)

// //delete is required to delete the object &&  return type of delete is always true

// let returntype=delete car.color
// console.log(car.color,returntype)

// // Function Vs Method
// let ageCalculate = function(birthyear){
//     let age = 2023 - birthyear
//     console.log(`Current age is = ${age} `)
// }
// ageCalculate (2003)

//Method ›-- It is nothing but object property(Key) holding ||are function defined inside the object i.e properties 
// Function as "Value"

// let persosn={
//      ageCalculate:(birthyear,currentyear)=> {
//         let age= currentyear-birthyear
//         return age
//     }

// }
// console.log(person.ageCalculate(2002,2034))

         // this keyword
// In Each Method We have an access of special keyword called
// "this"
                 // "this" keyword represent the object calling the object in  which "this" is present
/*
let person={
    name:"ankit",
age:23,
city:"begaluru",
favoritefood:"biryani",
getinfo:function(){
    return `ht myself ${this.name} i m ${this.age}  lives in ${this.city}`
}
}
console.log(person.getinfo())

// forEach method of array Its another type of loop which we used to traverse
// over the array

let dishes=["raita","biryani","dosa","daal"]
dishes.forEach(function(element){
    console.log(element)
})

//Object inside the array and how to access it
let username=[{name:"fgch",reason:"watching gh"},{name:"abhik",reason:"watching porn"}]
for(let i=0;i<username.length;i++){
console.log(`${username[i].name} is ban because of this reason ${username[i].reason}` )
}


                  // Math is a built in object javascript
alert("ankit pls stop")
// console. log(Math)
let number = 9.6;
console.log(Math.round(number)) //round to nearest integer
console.log(Math.floor(number)) //round to down
console.log(Math.ceil (number)) //round to up
console.log(Math.trunc(number)) //remove decimal part
let random = Math.random ()
console.log(Math.round (random*100)) // 1-100
alert("you are restricted ")
*/
// Function

// call and apply method
// We can manually set the value of"this" keyword using call and apply

let mainplanee={
    airline:"Fly India", 
    iatacode: "FI",
     bookings:[],
     book:function(name,flightcode){
        console.log(`your ticket of ${this.airline} of flight code${this.iatacode} ${flightcode} of passenger name ${name} is booked `)
        this.bookings.push({airlinname:`${this.airline}`,passenger:name })
     }
} 
"strict"
mainplanee.book("ankit",3405)
mainplanee.book("ravi",3405)
console.log(mainplanee)
//book(665, "Lurie") //book is regular function
//I "this" value is "undefined" at least in strict mode
//I Solution Using "call"
let childplane={
    airline:"childplane",
    iatacode: "CP",
    bookings:[],
}
 let book=mainplanee.book
 //synatx is call is book.call(nameoftheobject for which you u want to use the function,arg1,arg2
 book.call(childplane,"akansha","cp201")// this way we can the function of another object
 console.log(childplane)

 // apply method syntanx same as call only the arguments should be passed in array
book.apply(childplane,[ "HASHESH","456"])

                                             //bind method
function greet()
{

    return console.log(`welcome ${this.firstname} ${this.secondname} on my new website`)
}

let user={
    firstname:"ankit",
    secondname:"singh"
}
let greets=greet.bind(user) //binding greets with greet and passing the object
greets()

 
//"object/arrays" how "reference" are passed to variable

//pass by reference
let arr=[23,56,89,59]
let ref=arr
console.log(arr)
console.log("seperator")
console.log(ref)
ref[1]=67 //change by reference
console.log(arr)

//pass by value

// pass by value
let getValue = [...arr]; //using seprator arr value is pass
getValue[6]= 8
console.log("Orifinal array ",arr);
console.log("getValue array",getValue);


//for each loop used to iterate the key of the object
let car={
    model:"honda",
    company:"tesla",
    price:"5lakh"
}
for (let key in car){
    console.log(key)
}
let x=""   //accessing the value of the key of object
for(let key in car){
    x=x+" " +car[key]
    console.log(car[key])
}
console.log("***")
console.log(x)
