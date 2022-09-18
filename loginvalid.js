let email=document.getElementById("email");
let error=document.getElementById("error");
let pwd=document.getElementById("pwd");
let pass=document.getElementById("pass");

function validate(){
    let regExp  = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regExp.test(email.value)){
        error.innerHTML="Valid Email Address";
        error.style.color="green";
        return true;
    }
    else{
        error.innerHTML="Email Id is Invalid";
        error.style.color="red";
        return false;
    }

}