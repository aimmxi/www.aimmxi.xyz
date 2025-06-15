const images = document.querySelectorAll('.ff');

// Maximum distance per move
const maxMove = 100;

// Array to hold the state of each image
const imageStates = Array.from(images).map(image => {
  const imageWidth = image.offsetWidth;
  const imageHeight = image.offsetHeight;

  // Get the current computed position (left/top) from the DOM
  const style = getComputedStyle(image);
  let currentX = parseFloat(style.left) || 0; // Default to 0 if not set
  let currentY = parseFloat(style.top) || 0;

  return {
    image,         // Reference to the DOM element
    imageWidth,    // Width of the image
    imageHeight,   // Height of the image
    currentX,      // Current horizontal position
    currentY       // Current vertical position
  };
});

// Function to move each image in a random zigzag pattern
function moveZigzag() {
  imageStates.forEach(state => {
    // Generate random movement deltas within the range [-maxMove, maxMove]
    const dx = (Math.random() - 0.5) * 2 * maxMove;
    const dy = (Math.random() - 0.5) * 2 * maxMove;

    // Calculate the new proposed position
    let nextX = state.currentX + dx;
    let nextY = state.currentY + dy;

    // Clamp the position so the image stays inside the viewport
    nextX = Math.max(0, Math.min(window.innerWidth - state.imageWidth, nextX));
    nextY = Math.max(0, Math.min(window.innerHeight - state.imageHeight, nextY));

    // Update the state with the new position
    state.currentX = nextX;
    state.currentY = nextY;

    // Move the image to the new position
    state.image.style.left = `${nextX}px`;
    state.image.style.top = `${nextY}px`;
  });
}

// Repeat the zigzag movement every 500 milliseconds
setInterval(moveZigzag, 500);
