document.addEventListener("DOMContentLoaded", function () {
    var loginButton = document.getElementById("loginbtn");
    populateOptions();

    loginButton.addEventListener("click", function (event) {
        console.log(event)
        var errors = [];
        var isFormValid = false;
        var username = document.getElementById("username")
        isFormValid = validateEmpty(username)
        errors.push("Username is not valid");
        var password = document.getElementById("password")
        isFormValid = validateEmpty(password)
        errors.push("Password is not valid")
        if (isFormValid) {
            window.location.replace("success.html");
        } else {
            errors.forEach((each) => {
                document.getElementById("errors").append(each)
            });
            window.location.replace("error.html");
        }
    })
});

function populateOptions() {
    console.log(1)
    var request = new XMLHttpRequest();
    console.log("Created Request.............")
    request.open("GET", "https://run.mocky.io/v3/d8a99df5-bec4-43ce-8ed0-3165f6b5e97b", true);
    console.log("Opened Connection ...................")
    request.onreadystatechange = function () {
        // this function will get called when ever the state changes 2, 3, 4 [completion]
        console.log("State Changed ................. ", request.readyState)
        if (request.readyState == 4 && request.status == 200) {
            console.log("Got Response ................................", request.responseText)
            var domains_element = document.getElementById("domains");
            var result = request.responseText;
            var options_response = JSON.parse(result);
            console.log("Converted The Response to JSON ", options_response);
            options_response.forEach((each) => {
                domains_element.innerHTML = domains_element.innerHTML +
                    "<option>" +
                    each +
                    "</option>"
            });
        }
    }
    request.send();
    console.log("Sent Request ........................................")
}
function validateEmpty(elem) {
    if (elem.value == undefined || elem.value == null || elem.value == "") {
        return false;
    } else {
        return true;
    }
}