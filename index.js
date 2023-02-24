var body = document.body;
var x = document.getElementById("x");
var z= document.getElementById("middle");
var y = document.getElementById('content-setings');
var bck_btn = document.getElementById('close-btn');
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");


function Whitemode(){
  body.classList.toggle('white-mode');
  x.classList.add('close');

}

function Open_Close(){
  x.classList.remove('close');
  x.classList.toggle('open') 
}

function Close_Open() {
  z.classList.add("close");
  y.classList.add("open-setings");
  x.classList.remove("open");
  bck_btn.classList.add("close-button")
}
function Close_Back(){
  y.classList.remove("open-setings");
  z.classList.remove("close")
  bck_btn.classList.remove("close-button")
}
