console.log("hello coder")
let firstname="ankit"
let lastname="siinngh"
method using template literals
let fullname=`i want ${firstname} to become a good coder  ${lastname}`
console.log(firstname,lastname);
console.log(fullname);
getting string character
firstname[3]

string method
console.log(firstname.toUpperCase())
console.log(lastname.lastIndexOf('n'))
let hobbies=' running swimming cricket '
let result= hobbies.trim()
console.log(result.indexOf('run'))
console.log(result.indexOf('swimming'))
// some commoon string method
console.log(result.lastIndexOf('ming'))//case sensitive
console.log(result.includes('running'))
console.log(result.includes('Running')) //case sensitive
let name='ankitsinhh';
console.log(name.slice(0,5)) //it take 0 to 4 
// split method

let vege='saag tomatoes brinjal';
name=vege.split(' '); //string to array conversion hoga split se
console.log(name[0])

/ numbers
 
let score = 50;
// console.log(score, typeof score)
Mathmaticall Operators * / % **

/ let result = score / 2; //Give Quotient
// let result = score%2; //Give Remainder
// Mathmaticall Expression
finalresult = score *2 + (4*3) - 8 / 2% 4
// Using Priority And Precedence
// 1 () Brackets
// 2 ** Power Operator
// 3 * 1 % (From Left to Right)
console.log(finalresult)

loose equlaity and strict equality
let age=22;
console.log(age==22); in both sentenecs value is check not type i.e loose equality
console.log(age=='22');

let age=22;
console.log(age===22); //in 3 sentenecs value n  type both check  i.e strict equality
console.log(age==='22');
console.log(age!=='22');
Type Conversion
let stringType = "12";
console.log(stringType,typeof stringType);
// Number Method
let numberType = Number (stringType);
console. l0g(numberType,typeof numberType)
// Imp Note
// In Number method passing String Must be of numeric values
//boolean methid
let age = ""; //empty String
let booleanValueOfAge = Boolean (age);
29
30
// // console.log("Boolean Value of age is ", booleanValueOfAge)
//           //   Arrays concat ,length, push ,pop
// let name=['ankit' , 'akansha' , 'roshni'];
// let marriage=['ankit', 'akansha'];
// let num=name.concat(marriage);
// console.log(num);
// console.log(name.length);
// // let newDishes = ["sweet-dish", 'Pani-poray'];
// // console.log(dishes.concat(newDishes));
// // let updatedDishes = dishes.concat(newDishes)

// // // Length method)
// // console.log(updatedDishes.length)
// // // push method
// // console. log(updatedDishes.push ("Bhallay")
// // //return new length o
// // console.log(updatedDishes)
// // // push will actually change the array
// // console.log(marriage.push('nainika')) // PUSH WILL THE INDEX AFTER THE VALUE IS PUSH
// // console.log(marriage)
// // console.log(marriage.pop()) // pop nainika will get deleted  will remove the element from the last


//                   // Boolean Values And Comparison Operators
// let booleanType = true;
// let stringType = "true";
//  console.log(typeof booleanType, typeof stringType)
// // Methods Return Boolean Values
// let email = "wowcoder@example.com";
// let booleanValue = email. includes("E");
// // console.log(booleanValue)
// // Comparison Operators Always Return Boolean Value
// //
// // =二，=== ，！==，！=
// // / >, >=
// // / <
// // ，く=
// let status = "low"
// console.log(status =="low")



//                //and or not
//               // Priorities
// // Not
// // And, OR From left to right

// VAriables and Block Scope
// scope ››- Area Where variable is defined or accessible

// let ank=50
// if(true){
//      let ank=60;  // const and let hee scope create karega block scope var nahi karega
//     console.log(ank)
// }
// console.log(ank)


        //   ternary operator is used in this case and if u want to store value of condition

    //  let age=16
    //  let weight=50
    // // if(age>16){
    // //     console.log("pass")
    // // }
    // // else{
    // //     console.log("fail")
    // // }
    // let result= age>16? "pass" : "fail"
    // console.log(result);
    // let result = age › 18 ? weight › 55 ? "Qualify" : "weightIssue" :"ageissue"
//     // function
//     // Functions

// //  It is simply a piece of code which we can use in our
// // // program many times.
// // // It is just like a variable holding some piece of code
// // // Declaration
// // function nameOfFunction(){
// // console. log("You are running code present inside the function")
// // }
// // // function call
// // nameOfFunction()
// // // Function Expression
// // let fun = function(){ //also called anonymous function
// //     console.log("This is an example of function expression")
// //     // Calling function expression
// //     fun()

// real life examole
// let invitation=function(name){
//  console.log(`hello ${name} you r invited pls come to the party`)
// }
// invitation("ankit")
// invitation("vishal") default value (name = "defaultName", time =night)

// let calculator=function(birthyear,currentyear=2023){
//     let currentage=currentyear-birthyear
//     console.log(`your gae is${currentage}`)
// }
// calculator(2002,2045)
let calculator=function(birthyear,currentyear=2024){
    let currentage=currentyear-birthyear
return currentage
};

function cal(birthyear,currentyear=2024){
    let currentage=currentyear-birthyear
return currentage
};

const ans = (birthyear,currentyear)=>{
      let currentage=currentyear-birthyear
return currentage;
}

console.log(ans(2002,2023));
console.log(cal(2005))
// console.log(calculator(2002));

// let agecalculator=birthyear=>`your age is ${birthyear}`
// console.log(agecalculator(2002));
