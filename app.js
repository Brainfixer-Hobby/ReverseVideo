const forward = document.querySelector(".forward");
const backward = document.querySelector(".backward");

window.addEventListener("load", () => {
  const duration = forward.duration;
  forward.addEventListener("mouseenter", () => {
    forward.pause();
    backward.style.zIndex = 100;
    backward.currentTime = duration - forward.currentTime;
    backward.play();
  });

  backward.addEventListener("mouseleave", () => {
    backward.pause();
    backward.style.zIndex = 0;
    forward.currentTime = duration - backward.currentTime;
    forward.play();
  });
});
