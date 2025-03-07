function myFunction() {
    alert("Sorry,This Insurance in not available now");
  }
// form validation for index page
function validateForm() {
  let valid = true;
  // Clear previous errors
  document.getElementById('nameError').innerText = "";
  document.getElementById('emailError').innerText = "";
  document.getElementById('phoneError').innerText = "";

  // Get form values
  const name1 = document.getElementById('name').value;
  const email1 = document.getElementById('email').value;
  const phone1 = document.getElementById('phone').value;

  // Validate Name (letters and spaces only)
  const namePattern = /^[A-Za-z\s]+$/;
  if (!name1) {
      document.getElementById('nameError').innerText = "Name is required.";
      valid = false;
  } else if (!namePattern.test(name1)) {
      document.getElementById('nameError').innerText = "Name can only contain letters and spaces.";
      valid = false;
  }

  // Validate Email (simple email format)
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email1) {
      document.getElementById('emailError').innerText = "Email is required.";
      valid = false;
  } else if (!emailPattern.test(email1)) {
      document.getElementById('emailError').innerText = "Invalid email format.";
      valid = false;
  }

  // Validate Phone Number (10 digits)
  const phonePattern = /^\d{10}$/;
  if (!phone1) {
      document.getElementById('phoneError').innerText = "Phone number is required.";
      valid = false;
  } else if (!phonePattern.test(phone1)) {
      document.getElementById('phoneError').innerText = "Phone number must be 10 digits.";
      valid = false;
  }

  return valid;  // Prevent form submission if any field is invalid
}

// form validation 2
function validateForm2() {
  let valid = true;
  // Clear previous errors
  document.getElementById('nameError2').innerText = "";
  document.getElementById('emailError2').innerText = "";
  document.getElementById('phoneError2').innerText = "";
  document.getElementById('messageError').innerText = "";

  // Get form values
  const name = document.getElementById('name2').value;
  const email = document.getElementById('email2').value;
  const phone = document.getElementById('phone2').value;
  const message = document.getElementById('message').value;

  // Validate Name (letters and spaces only)
  const namePattern = /^[A-Za-z\s]+$/;
  if (!name) {
      document.getElementById('nameError2').innerText = "Name is required.";
      valid = false;
  } else if (!namePattern.test(name)) {
      document.getElementById('nameError2').innerText = "Name can only contain letters and spaces.";
      valid = false;
  }

  // Validate Email (simple email format)
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email) {
      document.getElementById('emailError2').innerText = "Email is required.";
      valid = false;
  } else if (!emailPattern.test(email)) {
      document.getElementById('emailError2').innerText = "Invalid email format.";
      valid = false;
  }

  // Validate Phone Number (10 digits)
  const phonePattern = /^\d{10}$/;
  if (!phone) {
      document.getElementById('phoneError2').innerText = "Phone number is required.";
      valid = false;
  } else if (!phonePattern.test(phone)) {
      document.getElementById('phoneError2').innerText = "Phone number must be 10 digits.";
      valid = false;
  }

  // Validate Message (at least 10 characters)
  if (!message) {
      document.getElementById('messageError').innerText = "Message is required.";
      valid = false;
  } else if (message.length < 10) {
      document.getElementById('messageError').innerText = "Message must be at least 10 characters long.";
      valid = false;
  }

  return valid;  // Prevent form submission if any field is invalid
}