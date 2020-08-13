document.addEventListener("DOMContentLoaded", function () {
    var loginButton = document.getElementById("loginbtn");
    loginButton.addEventListener("click", function (event) {
        console.log(event)
        var errors=  []; 
        var isFormValid = false;
        var username = document.getElementById("username")
        isFormValid = validateEmpty(username)
        errors.push("Username is not valid");
        var password = document.getElementById("password")
        isFormValid = validateEmpty(password)
        errors.push("Password is not valid")
        if (isFormValid) {
            window.location = "/success.html";
        } else {
            errors.forEach((each)=>{
                document.getElementById("errors").append(each)
            });
            //window.location = "/error.html";
        }
    })
});


function validateEmpty(elem) {
    if (elem.value == undefined || elem.value == null || elem.value == "") {
        return false;
    } else {
        return true;
    }
}