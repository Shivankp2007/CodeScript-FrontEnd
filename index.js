
var body = document.body;
var x = document.getElementById("x");
var z= document.getElementById("middle");
var y = document.getElementById('content-setings');

function Whitemode(){
  body.classList.toggle('white-mode');

}

function Open_Close(){
  x.classList.toggle("open"); 
}

function Close_Open() {
  z.classList.add("close");
  y.classList.add("open-setings");
}
function Close_Back(){
  y.classList.add("close-setings");
  z.classList.remove("close")
}
