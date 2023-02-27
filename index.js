var body = document.body;
var x = document.getElementById("x");
var z= document.getElementById("middle");
var y = document.getElementById('set');
let btn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");


//TABS change
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
function Close_Open() {
  x.classList.remove('open');
  z.classList.add('close');
  y.classList.add('open_content-setings');
  backbtn_dark.classList.add('open-icon');

}

function Whitemode(){
  body.classList.toggle('white-mode');
  dark.classList.toggle('open-icon');
  dark1.classList.toggle('open-icon');
  dark2.classList.toggle('open-icon');
  white.classList.toggle('close-icon');
  white1.classList.toggle('close-icon');
  white2.classList.toggle('close-icon');
  backbtn_dark.classList.toggle('close-icon');
  backbtn_white.classList.toggle('open-icon');
  
  
}

function Open_Close(){
  x.classList.toggle('open');
}


function Close_Back(){
  x.classList.remove('close');
  z.classList.remove('close');
  y.classList.remove('open_content-setings');
  backbtn_white.classList.remove('open-icon');
  backbtn_dark.classList.remove('open-icon');
  x.classList.remove('open');


}
