const username = document.querySelector("#username");
const password = document.querySelector("#password");
const confirm = document.querySelector("#confirmpassword");
const button = document.querySelector("#loginBtn");
const error = document.querySelector("#error");

button.addEventListener("click", function(event) {
    event.preventDefault();
    checkEmptyField(username )
    checkEmptyField(password )
    checkEmptyField(confirm )
    checkPasswordLength()
    checckpasswordMatch()


})
function checkEmptyField(field){
    if(field.value == ""){
        error.style.display = "block";
        username.classList.add("border-2", "border-red-500")
        password.classList.add("border-2", "border-red-500")
        confirm.classList.add("border-2", "border-red-500")


    }
    else{
        error.style.display = "none";
        username.classList.remove("border-2", "border-red-500")
        password.classList.remove("border-2", "border-red-500")
        confirm.classList.remove("border-2", "border-red-500")

    }
}

const passwordText = document.getElementById("passwordText")

// password length
function checkPasswordLength(){
    if(password.value.length <6){
        passwordText.innerHTML = "Weak Password atleast 6 digit"
        passwordText.style.color = "red"

    }
    else{
        passwordText.innerHTML = ""
        passwordText.style.color = ""
    }

}
// matching confirm and password
function checckpasswordMatch(){
    const passwordError = document.getElementById("passwordError")
    if(confirm.value != password.value){
        passwordError.innerHTML = "Passwords are not same"
        passwordError.style.color = "red";

    }
    else {
        passwordError.innerHTML = ""
        passwordError.style.color = "";

    }
}


