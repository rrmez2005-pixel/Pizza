document.getElementById("pizza-form").onsubmit = validateForm;
// or document.getElementById("pizza-form").onsubmit = () => {alert("hellopizzza")};

function validateForm() {
alert("Hello pizza")

  let isValid = true;

  clearErrors();

  let fname = document.getElementById("fname").value.trim();
  if(fname === "") {
    document.getElementById("err-fname").style.display = "block";
    isValid = false;
  }

  let lname = document.getElementById("lname").value.trim();
  if(lname === "") {
    document.getElementById("err-lname").style.display = "block";
    isValid = false;
  }

  //do not submit form if data is invalid
  return isValid;
};

function clearErrors() {
  let errors = document.getElementsByClassName("err");
  for (let i=0; i<errors.length; i++) {
    errors[i].style.display = "none";
  }
}
