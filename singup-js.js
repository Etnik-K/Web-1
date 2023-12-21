// script.js
function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password === confirmPassword) {
        // Passwords match, proceed with sign up or any other action
        window.location.href = "profile.html";
    } else {
        // Passwords do not match, you can display an error message or take other actions
        alert("Passwords do not match. Please try again.");
    }
}
