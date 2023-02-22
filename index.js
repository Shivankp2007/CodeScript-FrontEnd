var body = document.body;
var darkimg =document.getElementsByClassName('dark-icon');

function togglewb(){
    body.classList.toggle("dark-mode");
}

function profile(){
    var x = document.getElementById("profile-dropdown");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
