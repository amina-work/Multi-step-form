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
        myNameInput.style.border = "1px solid hsl(354, 84%, 57%)";
    } else if (myNameRegex.test(myNameInput.value) == false) {
        myNameError.innerHTML = "Can't contain numbers or symbols";
        myNameInput.style.border = "1px solid hsl(354, 84%, 57%)";
    } else if (myNameInput.value.trim() !== "") {
        myNameError.innerHTML = "";
        myNameInput.style.border = "1px solid hsl(243, 100%, 62%)";
    }
}
  
function checkNum() {
    let myNumInput = document.getElementById("phone");
    let myNumError = document.getElementById("error-phone");
    let myNumRegex = /^[0-9\s]+$/;
  
    if (myNumInput.value.trim() == "") {
        myNumError.innerHTML = "This field is required";
        myNumInput.style.border = "1px solid hsl(354, 84%, 57%)";
    } else if (myNumRegex.test(myNumInput.value) == false) {
        myNumError.innerHTML = "Must contain number";
        myNumInput.style.border = "1px solid hsl(354, 84%, 57%)";
    } else if (myNumInput.value.trim().length !== 10) {
        myNumError.innerHTML = "Invalid Phone Number";
        myNumInput.style.border = "1px solid hsl(354, 84%, 57%)";
    } else {
        myNumError.innerHTML = "";
        myNumInput.style.border = "1px solid hsl(243, 100%, 62%)";
    }
}
  
function checkEmail() {
    let myEmailInput = document.getElementById("email");
    let myEmailError = document.getElementById("error-email");
    let myEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    if (myEmailInput.value.trim() == "") {
        myEmailError.innerHTML = "This field is required";
        myEmailInput.style.border = "1px solid hsl(354, 84%, 57%)";
    } else if (myEmailRegex.test(myEmailInput.value) == false) {
        myEmailError.innerHTML = "Please enter a valid e-mail";
        myEmailInput.style.border = "1px solid hsl(354, 84%, 57%)";
    } else {
        myEmailError.innerHTML = "";
        myEmailInput.style.border = "1px solid hsl(243, 100%, 62%)";
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
/* MONTHLY Choosing a plan / changing colors */
checkBox = document.getElementById("monthlyPlanArc").addEventListener("click", event => {
    monthlyPlanArc.style.backgroundColor = "hsl(217, 100%, 97%)";
    monthlyPlanArc.style.border = " solid 1px hsl(243, 100%, 62%)";
    /*res les autres background et borders */
    monthlyPlanAdv.style.backgroundColor = "white";
    monthlyPlanAdv.style.border = " solid 1px hsl(231, 11%, 63%)";
    monthlyPlanPro.style.backgroundColor = "white";
    monthlyPlanPro.style.border = " solid 1px hsl(231, 11%, 63%)";
    yearlyPlanArc.style.backgroundColor = "white";
    yearlyPlanArc.style.border = " solid 1px hsl(231, 11%, 63%)";
    yearlyPlanAdv.style.backgroundColor = "white";
    yearlyPlanAdv.style.border = " solid 1px hsl(231, 11%, 63%)";
    yearlyPlanPro.style.backgroundColor = "white";
    yearlyPlanPro.style.border = " solid 1px hsl(231, 11%, 63%)";
    /* la suite */
    //document.getElementById("modeResume").innerHTML = "Arcade (monthly)";
    //document.getElementById("priceResume").innerHTML = "9$/mo";
    //document.getElementById("modeTotal").innerHTML = "Total (per month)";
});
checkBox = document.getElementById("monthlyPlanAdv").addEventListener("click", event => {
    monthlyPlanAdv.style.backgroundColor = "hsl(217, 100%, 97%)";
    monthlyPlanAdv.style.border = " solid 1px hsl(243, 100%, 62%)";
    /*res les autres background et borders */
    monthlyPlanArc.style.backgroundColor = "white";
    monthlyPlanArc.style.border = " solid 1px hsl(231, 11%, 63%)";
    monthlyPlanPro.style.backgroundColor = "white";
    monthlyPlanPro.style.border = " solid 1px hsl(231, 11%, 63%)";
    yearlyPlanArc.style.backgroundColor = "white";
    yearlyPlanArc.style.border = " solid 1px hsl(231, 11%, 63%)";
    yearlyPlanAdv.style.backgroundColor = "white";
    yearlyPlanAdv.style.border = " solid 1px hsl(231, 11%, 63%)";
    yearlyPlanPro.style.backgroundColor = "white";
    yearlyPlanPro.style.border = " solid 1px hsl(231, 11%, 63%)";
    /* la suite */
    //document.getElementById("modeResume").innerHTML = "Arcade (monthly)";
    //document.getElementById("priceResume").innerHTML = "9$/mo";
    //document.getElementById("modeTotal").innerHTML = "Total (per month)";
});
checkBox = document.getElementById("monthlyPlanPro").addEventListener("click", event => {
    monthlyPlanPro.style.backgroundColor = "hsl(217, 100%, 97%)";
    monthlyPlanPro.style.border = " solid 1px hsl(243, 100%, 62%)";
    /*res les autres background et borders */
    monthlyPlanAdv.style.backgroundColor = "white";
    monthlyPlanAdv.style.border = " solid 1px hsl(231, 11%, 63%)";
    monthlyPlanArc.style.backgroundColor = "white";
    monthlyPlanArc.style.border = " solid 1px hsl(231, 11%, 63%)";
    yearlyPlanArc.style.backgroundColor = "white";
    yearlyPlanArc.style.border = " solid 1px hsl(231, 11%, 63%)";
    yearlyPlanAdv.style.backgroundColor = "white";
    yearlyPlanAdv.style.border = " solid 1px hsl(231, 11%, 63%)";
    yearlyPlanPro.style.backgroundColor = "white";
    yearlyPlanPro.style.border = " solid 1px hsl(231, 11%, 63%)";
    /* la suite */
    //document.getElementById("modeResume").innerHTML = "Arcade (monthly)";
    //document.getElementById("priceResume").innerHTML = "9$/mo";
    //document.getElementById("modeTotal").innerHTML = "Total (per month)";
});

/* YEARLY Choosing a plan / changing colors */
checkBox = document.getElementById("yearlyPlanArc").addEventListener("click", event => {
    yearlyPlanArc.style.backgroundColor = "hsl(217, 100%, 97%)";
    yearlyPlanArc.style.border = " solid 1px hsl(243, 100%, 62%)";
    /*res les autres background et borders */
    yearlyPlanAdv.style.backgroundColor = "white";
    yearlyPlanAdv.style.border = " solid 1px hsl(231, 11%, 63%)";
    yearlyPlanPro.style.backgroundColor = "white";
    yearlyPlanPro.style.border = " solid 1px hsl(231, 11%, 63%)";
    monthlyPlanArc.style.backgroundColor = "white";
    monthlyPlanArc.style.border = " solid 1px hsl(231, 11%, 63%)";
    monthlyPlanAdv.style.backgroundColor = "white";
    monthlyPlanAdv.style.border = " solid 1px hsl(231, 11%, 63%)";
    monthlyPlanPro.style.backgroundColor = "white";
    monthlyPlanPro.style.border = " solid 1px hsl(231, 11%, 63%)";
    /* la suite */
    //document.getElementById("modeResume").innerHTML = "Arcade (monthly)";
    //document.getElementById("priceResume").innerHTML = "9$/mo";
    //document.getElementById("modeTotal").innerHTML = "Total (per month)";
});
checkBox = document.getElementById("yearlyPlanAdv").addEventListener("click", event => {
    yearlyPlanAdv.style.backgroundColor = "hsl(217, 100%, 97%)";
    yearlyPlanAdv.style.border = " solid 1px hsl(243, 100%, 62%)";
    /*res les autres background et borders */
    yearlyPlanArc.style.backgroundColor = "white";
    yearlyPlanArc.style.border = " solid 1px hsl(231, 11%, 63%)";
    yearlyPlanPro.style.backgroundColor = "white";
    yearlyPlanPro.style.border = " solid 1px hsl(231, 11%, 63%)";
    monthlyPlanArc.style.backgroundColor = "white";
    monthlyPlanArc.style.border = " solid 1px hsl(231, 11%, 63%)";
    monthlyPlanAdv.style.backgroundColor = "white";
    monthlyPlanAdv.style.border = " solid 1px hsl(231, 11%, 63%)";
    monthlyPlanPro.style.backgroundColor = "white";
    monthlyPlanPro.style.border = " solid 1px hsl(231, 11%, 63%)";
    /* la suite */
    //document.getElementById("modeResume").innerHTML = "Arcade (monthly)";
    //document.getElementById("priceResume").innerHTML = "9$/mo";
    //document.getElementById("modeTotal").innerHTML = "Total (per month)";
});
checkBox = document.getElementById("yearlyPlanPro").addEventListener("click", event => {
    yearlyPlanPro.style.backgroundColor = "hsl(217, 100%, 97%)";
    yearlyPlanPro.style.border = " solid 1px hsl(243, 100%, 62%)";
    /*res les autres background et borders */
    yearlyPlanAdv.style.backgroundColor = "white";
    yearlyPlanAdv.style.border = " solid 1px hsl(231, 11%, 63%)";
    yearlyPlanArc.style.backgroundColor = "white";
    yearlyPlanArc.style.border = " solid 1px hsl(231, 11%, 63%)";
    monthlyPlanArc.style.backgroundColor = "white";
    monthlyPlanArc.style.border = " solid 1px hsl(231, 11%, 63%)";
    monthlyPlanAdv.style.backgroundColor = "white";
    monthlyPlanAdv.style.border = " solid 1px hsl(231, 11%, 63%)";
    monthlyPlanPro.style.backgroundColor = "white";
    monthlyPlanPro.style.border = " solid 1px hsl(231, 11%, 63%)";
    /* la suite */
    //document.getElementById("modeResume").innerHTML = "Arcade (monthly)";
    //document.getElementById("priceResume").innerHTML = "9$/mo";
    //document.getElementById("modeTotal").innerHTML = "Total (per month)";
});