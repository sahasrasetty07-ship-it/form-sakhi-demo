
import formSakhi from "form-sakhi";

const form = document.getElementById("demoForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const pincode = document.getElementById("pincode").value;
  const password = document.getElementById("password").value;

  const errors = [];

  if (formSakhi.isEmpty(name)) {
    errors.push("Name is required");
  }

  if (!formSakhi.isValidEmail(email)) {
    errors.push("Please enter a valid email address");
  }

  if (!formSakhi.isValidIndianMobile(mobile)) {
    errors.push("Please enter a valid 10-digit Indian mobile number");
  }

  if (!formSakhi.isValidPincode(pincode)) {
    errors.push("Please enter a valid 6-digit PIN code");
  }

  if (!formSakhi.isStrongPassword(password)) {
    errors.push("Password must have 8 characters, uppercase, lowercase, number and special character");
  }

  result.className = errors.length === 0 ? "success" : "error";

  if (errors.length === 0) {
    result.innerHTML = "✓ Success! All fields passed validation using Form Sakhi.";
  } else {
    result.innerHTML = "<strong>Please fix these errors:</strong><br>" +
      errors.map(error => "• " + error).join("<br>");
  }
});
