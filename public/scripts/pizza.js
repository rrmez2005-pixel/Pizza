// Attach the validateForm function to the form's submit event
document.getElementById("pizza-form").onsubmit = validateForm;

function validateForm() {
  // Start by assuming the form is perfectly filled out
  let isValid = true;

  // Clear any existing error messages before re-checking
  clearErrors();

  // Validate first name: check if the input is blank after removing extra spaces (.trim)
  let fname = document.getElementById("fname").value.trim();
  if(fname === "") {
    // Reveal the hidden error message by changing display to block
    document.getElementById("err-fname").style.display = "block";
    isValid = false; // Mark form as invalid so it doesn't submit
  }

  // Validate last name
  let lname = document.getElementById("lname").value.trim();
  if(lname === "") {
    document.getElementById("err-lname").style.display = "block";
    isValid = false;
  }

  // Validate method (Pickup vs Delivery radio buttons)
  let methodSelected = false;
  // Get all elements with the name "method"
  let methodButtons = document.getElementsByName("method");
  
  // Loop through the radio buttons to see if at least one is checked
  for (let i = 0; i < methodButtons.length; i++) {
      if(methodButtons[i].checked) {
          methodSelected = true;
      }
  }

  // If the loop finished and neither were checked, show error
  if (!methodSelected) {
      document.getElementById("err-method").style.display = "block";
      isValid = false;
  }

  // Validate pizza size dropdown
  let size = document.getElementById("size").value;
  // "none" is the value of the default instruction option in the HTML
  if (size == "none") {
      document.getElementById("err-size").style.display = "block";
      isValid = false;
  }

  // If isValid is false, the browser cancels the form submission to the server
  // If isValid is true, the data gets POSTed to /submit-order
  return isValid;
};

// Helper function to hide all error messages
function clearErrors() {
  // Grab all span tags that have the class "err"
  let errors = document.getElementsByClassName("err");
  // Loop through the list and hide them all
  for (let i = 0; i < errors.length; i++) {
    errors[i].style.display = "none";
  }
}
