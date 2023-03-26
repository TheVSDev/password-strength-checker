

// Show / Hide Password
document.querySelector(".pw-display-toggle-btn").addEventListener("click",function() {
  let el = document.querySelector(".pw-display-toggle-btn");
  if(el.classList.contains("active")) {
    document.querySelector("#password").setAttribute("type","password");
    el.classList.remove("active");
  } else {
    document.querySelector("#password").setAttribute("type","text");
    el.classList.add("active");
  }
});
