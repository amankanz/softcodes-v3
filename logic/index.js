window.addEventListener('load', () => {
  const boxes = document.querySelectorAll('.box');
  const animationDuration = 4000;

  let currentIndex = 0;

  function showNextBox() {
    boxes[currentIndex].style.transform = 'translateX(-100%)';
    currentIndex = (currentIndex + 1) % boxes.length;
    boxes[currentIndex].style.transform = 'translateX(0)';
  }

  setTimeout(() => {
    showNextBox(); // Start the initial sliding animation
    setInterval(showNextBox, animationDuration); // Schedule subsequent sliding animations
  }, 0.3); // Delay the start of the sliding animation by 1 second
});
