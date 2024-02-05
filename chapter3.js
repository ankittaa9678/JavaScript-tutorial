
                     //function
// let agecalculator =function(birthyear,currentyear){
//     currentage=currentyear-birthyear
//     console.log(currentage)
// }
// agecalculator(2002,2024)

               //arrow function
// Arrow Function (ES6)
// Special Form of Function expression
// It allows us to write function more fast because
// No need to use function keyword
//
//No need to use paranthesis() in case of single parameter No need to use curely {} if single line code in function
// No need to use return statement if single line code in function


// let invitation= name=> `hello ${name} u are invited pls come`
// console.log(invitation(32))

// let agecalculator=(birthyear,currentyear)=>{
//     age=currentyear-birthyear
//     console.log(`current age is ${age}` )
// }
// agecalculator(2002,2024)

// Passing function as an Argument(Higher order function
                        let upperCase=str=> str.toUpperCase();
                        let lowercasse =str=> str.toLowerCase();
                        let tranformer=(str,fun) => fun(str)
                        console.log(tranformer("ankIIt",lowercasse))


// function returning another function
let compliment = function(msg){
    return function (name){
    console.log(`${msg} ${name}`)                                 //doubt here
    }
}
    console.log(compliment("you are agood coder")("ankit"))
    // 2 method of higher order function 
let complimented=compliment("you are a good coder")
complimented("harry")
complimented("hary")


// Immediately invoked function Expression
// Execuated Only once

// (function(name){
//     console.log("this function will never get executed "+ `${name}`)
// })("ankit")

// setTimeOut and setInterval
// // setTimeOut -> Run Function "once"
// after "interval" of time
// // setInterval -› Run function repeatedly,Starting after the //
// interval of time,then repeating

// setTimeOut
// setTimeOut(func|code, delay, argl,arg2)
//          function greeting(name){
//             console.log(`hello ${name} u are invited pls come`)
//          }
//          setTimeout(greeting,6000,"ashmit")
        // setInterval(func|code, delay, argl,arg2)
// setInterval(greeting,1000,"lipika")

          // Hoisting
//
// Variable "declaration"
// variable declaration  "hoisted" toword top of their scope
// name="ankit"
//   var name
//   console.log(name)

//  test()
// function test(){
// console.log("Hello programmers")
// }this function can be hosted 

//Not function expression or arrow function cannot be hoisted 
// let greeting=function(name){
//     console.log(name)
// }
//the above function cannot be hoisted
                       
               