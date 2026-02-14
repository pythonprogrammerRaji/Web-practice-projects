let nameError = document.getElementById("name-error")
let mobileError = document.getElementById("mobile-error")
let emailError = document.getElementById("email-error")
let messageError = document.getElementById("message-error")
let submitError = document.getElementById("submit-error")

function validateName(){
    let username = document.getElementById("username").value;

    if(username.length == 0){
        nameError.innerHTML = "Please enter the name";
        return false;
    }
    if(!username.match(/^[A-Za-z]*\s{1}[A-Za-z]$/)){
        nameError.innerHTML = "Enter Full Name";
        return false;
    }
    nameError.innerHTML = `<i class="fa-sharp fa-solid fa-circle-check"></i>`
    return true;

}
function validateMobile(){
    let mobile = document.getElementById("mobile").value;
    if(mobile.length == 0){
        mobileError.innerHTML = "Phone Number is required"
        return false;
    }
    if(mobile.length != 10){
        mobileError.innerHTML = "Must be 10 digits"
        return false;
    }
    if(!mobile.match(/^[0-9]{10}$/)){
        mobileError.innerHTML = "Only digit allowed"
        return false;
    }
    mobileError.innerHTML = `<i class="fa-sharp fa-solid fa-circle-check"></i>`
    return true;
}
function validateEmail(){
    let email = document.getElementById("email").value;
    if(email.length == 0){
        emailError.innerHTML = "Email is required"
        return false;
    }
    if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Email invalid"
        return false;
    }
    emailError.innerHTML = `<i class="fa-sharp fa-solid fa-circle-check"></i>`
    return true;
}
function validateMessage(){
    let message = document.getElementById("message").value;
    let required = 30;
    let left = required - message.length;

    if(left>0){
        messageError.innerHTML = left + 'more character required'
        return false;
    }
    messageError.innerHTML = `<i class="fa-sharp fa-solid fa-circle-check"></i>`
    return true;
}
function validateForm(){
    if(!validateName() || !validateEmail() || !validateMessage() || !validateMobile()){
        submitError.style.display = "block"
        submitError.innerHTML = "please fox error submit"
        setTimeout(function(){
            submitError.style.display = "none";
        }, 3000);
        return false;
    }
}