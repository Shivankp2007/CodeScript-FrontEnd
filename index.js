var body = document.body;
var x = document.getElementById("x");
var z= document.getElementById("middle");
var y = document.getElementById('content-setings');
var bck_btn = document.getElementById('close-btn');
let btn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
var sidebar = document.getElementById('sidebar');


function Whitemode(){
  body.classList.toggle('white-mode');

}

function Open_Close(){
  x.classList.remove('close');
  x.classList.toggle('open');
}

function Close_Open() {
  z.classList.add("close");
  y.classList.add("open-setings");
  x.classList.remove("open");
  bck_btn.classList.add("close-button");
  sidebar.classList.add('open-sidebar');
}
function Close_Back(){
  y.classList.remove("open-setings");
  z.classList.remove("close");
  bck_btn.classList.remove("close-button");
  sidebar.classList.remove('close');
}
