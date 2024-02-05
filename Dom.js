/*

let resultedelement= document.querySelector('p') //using queryselector only the first p tag will get selcted ,to select all tag of p use squeryselectorall
console.log(resultedelement)
*/

/*querySelectorall and it use node list array
let resultedelement= document.querySelectorAll('p')
console.log(resultedelement)
*/
        let resultedelement= document.querySelector('.coderdost')     //Access element with class using selector
        console.log(resultedelement)
        
        //Access Element with Id
let resultedElemen = document.querySelectorAll('#coders')
console.log(resultedElemen)
resultedElemen.forEach(elment=>{
    console.log(elment)
});
// Other Ways to Get html element using tagelement
let resul=document.getElementsByTagName('p') //will work for only html tag not with css prperties i.e id and #
console.log(resul)


// Get Element By className
classNameElements = document.getElementsByClassName("coderdost")
console.log(classNameElements)


// Updating And Changing Content

// innerText its  Ignore spaces and can miss many important tag 
let heading = document.querySelector('h1')
console.log(heading.innerText)


//innerhtml its does not ignore space and will not miss any nested tag

let heade=document.querySelector('h1')
console.log(heade.innerHTML)

//innertext 
let header=document.querySelector('.coderdost')
header.innerText-=checking is going on"

//innerhtml
let head=document.querySelector('.coderdost')
console.log(head.innerHTML)