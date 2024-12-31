// Get form elements
const nameinput = document.querySelector("#name");
const email = document.querySelector("#email");
const contact = document.querySelector("#contact");
const password = document.querySelector("#password");
const message = document.querySelector("#message");
const success = document.querySelector("#success");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const contactError = document.querySelector("#contactError");
const passwordError = document.querySelector("#passwordError");
const messageError = document.querySelector("#messageError");

function validateform() {
    clearmessages(); 
    let errorflag = false; 
    if (nameinput.value.length < 3) {
        nameError.innerText = "Name cannot be blank and must be at least 3 characters.";
        errorflag = true;
    }

    if (!emailisvalid(email.value)) {
        emailError.innerText = "Invalid email format.";
        errorflag = true;
    }

    if (!contactisvalid(contact.value)) {
        contactError.innerText = "Contact number should be 10 digits.";
        errorflag = true;
    }

    if (!passwordisvalid(password.value)) {
        passwordError.innerText = "Password must be at least 6 characters long and include letters and numbers.";
        errorflag = true;
    }

    if (message.value.length < 4) {
        messageError.innerText = "Message must be at least 4 characters long.";
        errorflag = true;
    }

    if (!errorflag) {
        success.innerHTML = "Form validation successful! Your message has been sent.";
    }

    return !errorflag;
}


function clearmessages() {
    nameError.innerText = "";
    emailError.innerText = "";
    contactError.innerText = "";
    passwordError.innerText = "";
    messageError.innerText = "";
    success.innerHTML = ""; 
}


function emailisvalid(email) {
    let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return pattern.test(email);
}

function contactisvalid(contact) {
    let pattern = /^[0-9]{10}$/;  
    return pattern.test(contact);
}

function passwordisvalid(password) {
    let pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;  
    return pattern.test(password);
}
