document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

   
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    if (username === "admin" && password === "admin") {
        
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("message").textContent = "Invalid username or password. Please try again.";
    }
});
