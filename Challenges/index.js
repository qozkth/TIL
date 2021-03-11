

const body = document.querySelector("body");
const FULLSCREEN = "fullScreen";
const MIDDLESCREEN = "middleScreen";
const SMALLSCREEN = "smallScreen";

function chageColor() {
  const screenSize = window.innerWidth;
  if (screenSize >= 1000) {
    body.classList.add(FULLSCREEN);
    body.classList.remove(MIDDLESCREEN,SMALLSCREEN)
  } else if (screenSize > 500 && screenSize < 900) {
    body.classList.add(MIDDLESCREEN);
    body.classList.remove(FULLSCREEN,SMALLSCREEN);
  } else {
    body.classList.add(SMALLSCREEN);
    body.classList.remove(MIDDLESCREEN,FULLSCREEN);
}
}
function windowResize() {
  window.addEventListener("resize", chageColor);
}
windowResize();
