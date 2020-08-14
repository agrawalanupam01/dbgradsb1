document.addEventListener("DOMContentLoaded", function () {
    var loginButton = document.getElementById("loginbtn");
    var password = document.getElementById("password");
    password.addEventListener("blur", function (event) {
        if (!validateEmpty(event.target))
            event.target.style.border = '2px solid red';
        else
            event.target.style.border = '1px solid black';
    });
    username.addEventListener("blur", function (event) {
        if (!validateEmpty(event.target))
            event.target.style.border = '2px solid red';
        else
            event.target.style.border = '1px solid black';
    });
    populateOptions();
    loginButton.addEventListener("click", function (event) {
        event.preventDefault();
        var errors = [];
        var isFormValid = false;
        var username = document.getElementById("username")
        isFormValid = validateEmpty(username)
        errors.push("Username is not valid");
        var password = document.getElementById("password")
        isFormValid = validateEmpty(password)
        errors.push("Password is not valid")
        if (isFormValid) {
            console.log("success")
            window.location = "success.html";
        } else {
            errors.forEach((each) => {
                document.getElementById("errors").append(each)
            });
            window.location.replace("error.html");
        }
        return false;
    })
});

function populateOptions() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://run.mocky.io/v3/d8a99df5-bec4-43ce-8ed0-3165f6b5e97b", true);
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var domains_element = document.getElementById("domains");
            var result = request.responseText;
            var options_response = JSON.parse(result);
            options_response.forEach((each) => {
                domains_element.innerHTML = domains_element.innerHTML + "<option>" + each + "</option>"
            });
        }
    }
    request.send();
}

function validateEmpty(elem) {
    if (elem.value == undefined || elem.value == null || elem.value == "") {
        return false;
    } else {
        return true;
    }
}