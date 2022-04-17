// localstorage
var z = +window.localStorage.getItem("aloc") + 1;
window.localStorage.setItem("aloc", z);
console.log(z)

// start clock
setInterval(function () {
  var span = document.getElementById("span");
  var tte = new Date();
  var hours = tte.getHours();
  var minuets = tte.getMinutes();
  var secands = tte.getSeconds();
  if (hours > 12) {
    hours ="0" + (hours - 12);
  }
  if (minuets < 10) {
    minuets ="0" + minuets;
  }
  if (secands < 10) {
    secands ="0" + secands;
  }
  span.textContent = `${hours} : ${minuets} : ${secands}`;
}, 300);
//end clock

// start anima
function anima(id) {
  var ele = document.getElementById(id),
    textNodi = ele.childNodes[0],
    text = textNodi.data;

  setInterval(function () {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNodi.data = text;
  }, 300);
}
//end anima

// start scroll
var b_i = document.querySelector(".b-i");
b_i.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
window.onscroll = function () {
  if (window.scrollY >= "800") {
    b_i.style.display = "block";
  } else {
    b_i.style.display = "none";
  }
};
//end scroll

// none-block
var nb = document.querySelector(".is");
nb.onclick = function (){
  this.classList.toggle("ios")
} 