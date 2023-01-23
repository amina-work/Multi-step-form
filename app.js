/* ======================================== Menu Toggle ======================================== */
/* Check Conditions for Step 1 */
function goStepTwo(){
    checkName();
    checkNum();
    checkEmail();
    Achieve();
}

function checkName() {
    let myNameInput = document.getElementById("name");
    let myNameError = document.getElementById("error-name");
    let myNameRegex = /^[a-zA-Z-\s]+$/;
  
    if (myNameInput.value.trim() == "") {
        myNameError.innerHTML = "This field is required";
    } else if (myNameRegex.test(myNameInput.value) == false) {
        myNameError.innerHTML = "Can't contain numbers or symbols";
    } else if (myNameInput.value.trim() !== "") {
        myNameError.innerHTML = "";
    }
}
  
function checkNum() {
    let myNumInput = document.getElementById("phone");
    let myNumError = document.getElementById("error-phone");
    let myNumRegex = /^[0-9\s]+$/;
  
    if (myNumInput.value.trim() == "") {
        myNumError.innerHTML = "This field is required";
    } else if (myNumRegex.test(myNumInput.value) == false) {
        myNumError.innerHTML = "Must contain number";
    } else if (myNumInput.value.trim().length !== 10) {
        myNumError.innerHTML = "Invalid Phone Number";
    } else {
        myNumError.innerHTML = "";
    }
}
  
function checkEmail() {
    let myMailInput = document.getElementById("email");
    let myNumError = document.getElementById("error-email");
    let myMailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    if (myMailInput.value.trim() == "") {
        myNumError.innerHTML = "This field is required";
    } else if (myMailRegex.test(myMailInput.value) == false) {
        myNumError.innerHTML = "Please enter a valid e-mail";
    } else {
        myNumError.innerHTML = "";
    }
}
  
function Achieve() {
    let myNumInput = document.getElementById("phone");
    let myNameInput = document.getElementById("name");
    let myMailInput = document.getElementById("email");
    let myNameRegex = /^[a-zA-Z-\s]+$/;
    let myNumRegex = /^[0-9\s]+$/;
    let myMailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    if (
        myNumInput.value.trim().length === 10 &&
        myNumRegex.test(myNumInput.value) == true &&
        myMailInput.value.trim().length !== 0 &&
        myMailRegex.test(myMailInput.value) === true &&
        myNameInput.value.trim().length !== 0 &&
        myNameRegex.test(myNameInput.value) === true
    ) {
        stepInfo.style.display = "none";
        step2.style.display = "flex";
        btn1.style.color = "white";
        btn1.style.backgroundColor = "rgba(255, 255, 255, 0)";
        btn2.style.backgroundColor = "hsl(228, 100%, 84%)";
        btn2.style.color = "black";
    }
}

/* ======================================== Monthly-Yearly Step2 Toggle ======================================== */
/*Is Checkbox in yearly or monthly?*/
checkBox = document.getElementById("toggle").addEventListener("click", event => {
    if (event.target.checked) {
        yearlyPlans.style.display = "flex";
        monthlyPlans.style.display = "none";
        addonAnnee.style.display = "flex";
        addonMois.style.display = "none";
    } else {
        yearlyPlans.style.display = "none";
        monthlyPlans.style.display = "flex";
        addonAnnee.style.display = "none";
        addonMois.style.display = "flex";
    }
});