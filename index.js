var body = document.body;
var x = document.getElementById("x");
var z= document.getElementById("middle");
var y = document.getElementById('content-setings');
let btn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
var sidebar = document.getElementById('sidebar');
var about = document.getElementById('about');

// ICONS change
var dark2 = document.getElementById('side-bar-icon-dark');
var white2 = document.getElementById('side-bar-icon-light');
var dark = document.getElementById('manage-account-icondark');
var white = document.getElementById('manage-account-iconwhite');
var dark1 = document.getElementById('manage-account-icondark-1');
var white1 = document.getElementById('manage-account-iconwhite-1');
var backbtn_white = document.getElementById('close-btn-white');
var backbtn_dark  = document.getElementById('close-btn-dark');
//END
function Whitemode(){
  body.classList.toggle('white-mode');
  dark.classList.toggle('open-icon');
  dark1.classList.toggle('open-icon');
  white.classList.toggle('close-icon');
  white1.classList.toggle('close-icon');
  backbtn_dark.classList.toggle('open-icon');
  backbtn_white.classList.toggle('close-icon');
  dark2.classList.toggle('open-icon');
  white2.classList.toggle('close-icon');
}

function Open_Close(){
  x.classList.remove('close');
  x.classList.toggle('open');
}

function Close_Open() {
  z.classList.add("close");
  y.classList.add("open-setings");
  x.classList.remove("open");
  backbtn_dark.classList.add("close-btn");
  backbtn_white.classList.add("close-btn");
  sidebar.classList.add('open-sidebar');
}
function Close_Back(){
  z.classList.remove("close");
  y.classList.remove("open-setings");
  backbtn_dark.classList.remove("close-btn");
  backbtn_dark.classList.add("close");
  backbtn_white.classList.remove("close-btn");
  backbtn_white.classList.add("close");
  sidebar.classList.remove('open-sidebar');

}
