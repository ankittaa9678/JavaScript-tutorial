//forms event (submit form) password validation
/*let form=document.querySelector('.sign-up-Form')
let email = document.querySelector ('#email')
let password = document.querySelector('#password')
//regular expression here 8 show the minimum length and 15 is the max length
let passwordpattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,15}$/;

let passwordvalue=password.value;
//console.log(password.value);
 //.match is binding 
//console.log(form)
form.addEventListener('submit',(e)=>{
    e.preventDefault();
   // console.log(email.value,password.value)        //.value will give me the value of email and password
    console.log("successfully submitted the form")
    let result = password.value.match(passwordpattern);
    console.log(form.userEmail.value,form.userPassword.value) 
    //using field name  given in the form we can directly access the value form.fieldname.value

if(result){
    console.log("your password is strong")
}
else{
    console.log("your passord is weak")
}})


/*Regular expression
/* Regular Expression (Regex)
 It is a pattern of Characters used to do pattern matching
 Or we can say for "Data*/
 
 /*Length At least = 8
At least Contain one Upper case letter
 At least Contain one Lower case letter
 At least Contain one digit 0 to 9 


  Regular Expression Part 2 (Regex)
 Basic Form Validation using Regex
                                             Implement username Validation
username can only consist of A-Z or a-z
 Length of username
consist•of•A-Z•or•a-between 6 to 12*/

let form =document.querySelector('.sign-up-Form');
let pass=document.querySelector('#password');
let name=document.querySelector('#user')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
let useractive=name.value;
    console.log(useractive)
})







