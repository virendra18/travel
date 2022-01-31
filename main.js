function form() {
  var name = document.forms["contactform"]["Name"];
  var email = document.forms["contactform"]["Email"];
  var phone = document.forms["contactform"]["mobilenumber"];
  var drop = document.forms["contactform"]["Destination"];

  if (name.value == "") {
    window.alert("Please enter your name.");
    name.focus();
    return false;
  }

  if (email.value == "") {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }

  if (phone.value == "") {
    window.alert("Please enter your mobile number.");
    phone.focus();
    return false;
  }

  if (drop.selectedIndex < 0) {
    alert("Please enter your course.");
    what.focus();
    return false;
  }

  return true;
}

let kashmir = document.getElementById("kashmir");
let rajasthan = document.getElementById("rajasthan");

let nepal = document.getElementById("nepal");
let northeast = document.getElementById("northeast");
let selectedOption;
function destination() {
  selectedOption = document.getElementById("selectDestination").value;

  if (selectedOption == "Rajasthan") {
    rajasthan.classList.remove("hidden");
    kashmir.classList.add("hidden");
    nepal.classList.add("hidden");
    northeast.classList.add("hidden");
  } 
  else if (selectedOption == "Kashmir") {
    kashmir.classList.remove("hidden");
    rajasthan.classList.add("hidden");
    nepal.classList.add("hidden");
    northeast.classList.add("hidden");
  }
   else if (selectedOption == "Nepal") {
    nepal.classList.remove("hidden");
    northeast.classList.add("hidden");
    kashmir.classList.add("hidden");
    rajasthan.classList.add("hidden");
  } 
  else if (selectedOption == "North East") {
    northeast.classList.remove("hidden");
    nepal.classList.add("hidden");
    kashmir.classList.add("hidden");
    rajasthan.classList.add("hidden");
  } 
  else {
    rajasthan.classList.add("hidden");
    kashmir.classList.add("hidden");
    nepal.classList.add("hidden");
    northeast.classList.add("hidden");

  }
}
