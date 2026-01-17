import "./components/site-header.js";
import "./components/site-footer.js";

function initImageStacks() {
  const stacks = document.querySelectorAll(".image-stack");

  stacks.forEach((stack) => {
    const images = Array.from(stack.querySelectorAll(".stack-img"));
    const prevBtn = stack.querySelector(".stack-arrow--prev");
    const nextBtn = stack.querySelector(".stack-arrow--next");
    let currentIndex = 0;

    // Initialize positions
    updatePositions();

    function updatePositions() {
      images.forEach((img, index) => {
        // Calculate position relative to current index
        // If we have 3 images: 0, 1, 2
        // currentIndex = 0 -> 0 at 0, 1 at 1, 2 at 2
        // currentIndex = 1 -> 1 at 0, 2 at 1, 0 at 2 (back of stack or hidden)

        // Simple modulo math:
        // desired pos = (index - currentIndex + length) % length

        const pos = (index - currentIndex + images.length) % images.length;

        // We only have styles for 0, 1, 2. Others hidden.
        img.setAttribute("data-pos", pos);
      });
    }

    function next() {
      currentIndex = (currentIndex + 1) % images.length;
      updatePositions();
    }

    function prev() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updatePositions();
    }

    if (nextBtn) nextBtn.addEventListener("click", next);
    if (prevBtn) prevBtn.addEventListener("click", prev);
  });
}

// Init on load
document.addEventListener("DOMContentLoaded", () => {
  initImageStacks();
});
