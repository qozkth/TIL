const screenWidthOutput = document.querySelector(".screenWidth");
const screenHeightOutput = document.querySelector(".screenHeight"); 
const outerWidthOutput = document.querySelector(".outerWidth");
const outerHeightOutput = document.querySelector(".outerHeight");
const innerWidthOutput = document.querySelector(".innerWidth"); 
const innerHeightOutput = document.querySelector(".innerHeight");
const clientWidthOutput  = document.querySelector(".clientWidth")
const clientHeightOutput = document.querySelector(".clientHeight");

function reportScreenWindowSize() {
  screenWidthOutput.textContent = window.screen.width;
  screenHeightOutput.textContent = window.screen.height;
}
function reportOuterSize() {
  outerWidthOutput.textContent = window.outerWidth;
  outerHeightOutput.textContent = window.outerHeight;
}
function reportInnerSize() {
  innerWidthOutput.textContent = window.innerWidth;
  innerHeightOutput.textContent = window.innerHeight;
}
function reportClientSize() {
  clientWidthOutput.textContent = document.documentElement.clientWidth;
  clientHeightOutput.textContent = document.documentElement.clientHeight;
}
window.addEventListener("resize", reportScreenWindowSize);
window.addEventListener("resize", reportInnerSize);
window.addEventListener("resize", reportOuterSize);
window.addEventListener("resize", reportClientSize);