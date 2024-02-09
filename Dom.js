/*

let resultedelement= document.querySelector('p') //using queryselector only the first p tag will get selcted ,to select all tag of p use squeryselectorall
console.log(resultedelement)
*/

/*querySelectorall and it use node list array
let resultedelement= document.querySelectorAll('p')
console.log(resultedelement)*/

        /*let resultedelement= document.querySelector('.coderdost')     //Access element with class using selector
        console.log(resultedelement)*/
        
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
header.innerText+="checking is going on" //text is adding to class

//innerhtml
let head=document.querySelector('.coderdost')
console.log(head.innerHTML)

// Getting and Setting attribute of element

let setting=document.querySelector('a')
setting.getAttribute('href')        //getting the attribute of anchor tag i.e href
setting.setAttribute('href',"https://www.youtube.com/watch?v=lL0ULDPCqIA") //the argument in which and what u need to change
setting.innerText="this is after change"


//adding the style 

let set=document.querySelector('h1')
set.style.color=("yellow")
set.style.backgroundColor="black"

// Add, Remove And Replace class of element

let naya=document.querySelector('h3')
 naya.classList.add('newclass') //adding of class is done

 naya.classList.remove('coders') //class is getting deleted

 naya.classList.replace('newclass','coders')

 // Parent, Children and Sibling

 let papa= document.querySelector('.content')
 console.log(papa.children)

 // We Can not run forEach Method on HTMLCollection So
// First convert it into array
console.log(Array.from(papa.children))
Array.from(papa.children).forEach(function (element){
    element.classList.add('newtest')
})

//through child to parent element
let baccha= document.querySelector('h1')
console.log(baccha.parentElement)

//I Find Next  and previous Sibling of child
console.log(baccha.nextElementSibling)
console.log(baccha.previousElementSibling)

// Event Basics (click Event) element.addEventListener('click',function(){
let evet = document.querySelectorAll('li')
console.log(evet)
evet.forEach(function(element){
    element.addEventListener('click',e=>{  //passing a 'e' paramenter in function no need to push the argument eventlistener will run it atomitically
        console.log('item_is_clicked')
        console.log(e)
        console.log(e.target)
     e.target.style.textDecoration = "line-through"

    })
})

//removing the tag when click
let eve = document.querySelectorAll('li')
console.log(eve)
eve.forEach(function(element){
    element.addEventListener('click',e=>{  //passing a 'e' paramenter in function no need to push the argument eventlistener will run it atomitically
    e.target.remove();
    })
})

