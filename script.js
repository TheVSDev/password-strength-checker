// Variables
let state = false;
let password = document.getElementById("password");
let passwordStrength = document.getElementById("password-strength");
let lowUpperCase = document.querySelector(".low-upper-case i");
let number = document.querySelector(".one-number i");
let specialChar = document.querySelector(".one-special-char i");
let eightChar = document.querySelector(".eight-character i");



// Show / Hide Password
document.querySelector(".pw-display-toggle-btn").addEventListener("click",function() {
  let el = document.querySelector(".pw-display-toggle-btn");
  if(el.classList.contains("active")) {
    password.setAttribute("type","password");
    el.classList.remove("active");
  } else {
    password.setAttribute("type","text");
    el.classList.add("active");
  }
});



// Strength Check Bar
function getPasswordStrength(password){
    let s = 0;
    if(password.length > 6){
      s++;
    }
    if(password.length > 10){
      s++;
    }
    if(/[A-Z]/.test(password)){
      s++;
    }
    if(/[0-9]/.test(password)){
      s++;
    }
    if(/[^A-Za-z0-9]/.test(password)){
      s++;
    }
    return s;
}

document.querySelector("#password").addEventListener("focus", function() {
    document.querySelector(".pw-strength").style.display = "block";
});

document.querySelector("#password").addEventListener("keyup", function(e) {
    let password = e.target.value;
    let strength = getPasswordStrength(password);
    let passwordStrengthSpans = document.querySelectorAll(".pw-strength span");
    strength = Math.max(strength,1);
    passwordStrengthSpans[1].style.width = strength*20 + "%";

    if(strength < 2) {
      passwordStrengthSpans[0].style.color = "#111";
      passwordStrengthSpans[1].style.background = "#d13636";
    } else if (strength >= 2 && strength <= 4) {
      passwordStrengthSpans[0].style.color = "#111";
      passwordStrengthSpans[1].style.background = "#e6da44";
    } else {
      passwordStrengthSpans[0].style.color = "#fff";
      passwordStrengthSpans[1].style.background = "#20a820";
    }
});
