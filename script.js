document.querySelector("body").addEventListener("mousemove", eyeball);
function eyeball() {
  var eye = document.querySelectorAll(".eye");
  eye.forEach(function (eye) {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;

    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = radian * (180 / Math.PI) * -1 + 180;
    eye.style.transform = "rotate(" + rot + "deg)";
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const spotlight = document.querySelector(".spotlight");

  let spotlightSize = "transparent 120px, rgba(0, 0, 0, 1) 150px)";

  window.addEventListener("mousemove", (e) => updateSpotlight(e));

  function updateSpotlight(e) {
    spotlight.style.backgroundImage = `radial-gradient(circle at ${
      (e.pageX / window.innerWidth) * 100
    }% ${(e.pageY / window.innerHeight) * 100}%, ${spotlightSize}`;
  }
});
