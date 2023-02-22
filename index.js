
var body = document.body
var partwhite = document.getElementsById("part-2");
var x = document.getElementById("x");

function Whitemode(){
  body.classList.toggle('white-mode');
  partwhite.classList.toggle('part-1-white');
}

function profile(){
  x.classList.toggle("open");
}
