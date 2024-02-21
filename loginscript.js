document.addEventListener("DOMContentLoaded", function() {
    document.forms["loginForm"].addEventListener("submit", function(event) {
        event.preventDefault();

        var password = document.getElementById("psw").value;

        if (password === "VildMad") {
            // Form will be submitted to Netlify
        } else {
            alert("Incorrect password. Please try again.");
        }
    });
});
