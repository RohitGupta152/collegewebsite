document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

   
    if (password !== confirmPassword) {
        document.getElementById("message").textContent = "Passwords do not match. Please try again.";
    } else {
        
        document.getElementById("message").textContent = "Registration successful!";
        
    }
});
