document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.ff');
  const container = document.getElementById('showcase-c'); // Container element

  // Check if container is found
  if (!container) {
    console.error('Container element not found');
    return;
  }

  // Maximum distance per move
  const maxMove = 200;

  // Array to hold the state of each image
  const imageStates = Array.from(images).map(image => {
    const imageWidth = image.offsetWidth;
    const imageHeight = image.offsetHeight;

    // Get the container's bounds using offset properties
    const containerLeft = container.offsetLeft;
    const containerTop = container.offsetTop;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Generate a random starting position inside the container
    const randomX = Math.random() * (containerWidth - imageWidth * 2);
    const randomY = Math.random() * (containerHeight - imageHeight * 2);

    // Set the initial position of the image using randomX and randomY
    image.style.left = `${randomX}px`;
    image.style.top = `${randomY}px`;

    return {
      image,         // Reference to the DOM element
      imageWidth,    // Width of the image
      imageHeight,   // Height of the image
      currentX: randomX, // Current horizontal position (starting position)
      currentY: randomY, // Current vertical position (starting position)
      containerLeft,     // Container's left position
      containerTop,      // Container's top position
      containerWidth,    // Container's width
      containerHeight    // Container's height
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

      // Clamp the position so the image stays inside the container
      nextX = Math.max(0, Math.min(state.containerWidth - state.imageWidth * 2 , nextX));
      nextY = Math.max(0, Math.min(state.containerHeight - state.imageHeight * 2, nextY));

      // Update the state with the new position
      state.currentX = nextX;
      state.currentY = nextY;

      // Move the image to the new position
      state.image.style.left = `${nextX}px`;
      state.image.style.top = `${nextY}px`;
    });
  }

  // Change direction each second
  setInterval(moveZigzag, 150);
});