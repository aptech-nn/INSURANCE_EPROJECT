function validateForm() {
    // Get form inputs
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    // Name validation
    if (name === "") {
        alert("Name must be filled out.");
        return false;
    }

    // Password validation
    var passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}