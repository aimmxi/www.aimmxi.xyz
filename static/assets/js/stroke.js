/**
 * 
 * @param {*} options The arguments
 */
function drawStroke(options) {
  const {
    canvasId = "",
    separation = 0.005,
    imageDelay = 1,
    startDelay = 0,
    imageSize = 16,
    imageSources = []
  } = options;

  // Canvas setup
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;

  // Variables
  const images = [];        // Array of images for the stroke
  let loadedCount = 0;      // Number of loaded images
  let t = 0;                // Animation step

  // Curve
  const p0 = { x: 0.20,  y: 0.80 };
  const p1 = { x: 0.3, y: 0.20 };
  const p2 = { x: 0.80, y: 0.20 };

  // Preload the images before rendering
  imageSources.forEach(src => {
    const img = new Image();
    img.src = src;

    // Increment the count and store it after loading
    img.onload = () => {
      loadedCount++;

      // When all images are loaded, launch the stroke
      if (loadedCount === imageSources.length) setTimeout(start, startDelay);
    };

    images.push(img);
  });

  // Quadratic Bezier function
  function getPoint(t) {
    const xp = (1 - t) * (1 - t) * p0.x +
              2 * (1 - t) * t * p1.x +
              t * t * p2.x;

    const yp = (1 - t) * (1 - t) * p0.y +
              2 * (1 - t) * t * p1.y +
              t * t * p2.y;

    return { x: xp * width , y: yp * height };
  }

  // Places an image at a given coordinate of the canvas
  function drawImageAtPoint(x, y) {
    const img = images[Math.floor(Math.random() * images.length)];

    ctx.save();
    ctx.translate(x, y);

    // Apply some random rotation to the image
    ctx.rotate(Math.random() * Math.PI * 2);

    // Draw the image with the specified size
    ctx.drawImage(img, -imageSize / 2, -imageSize / 2, imageSize, imageSize);
    ctx.restore();
  }

  // Steps each frame
  function animate() {
    if (t <= 1) {
      const point = getPoint(t);
      drawImageAtPoint(point.x, point.y);

      t += separation;
      setTimeout(() => {
        requestAnimationFrame(animate);
      }, imageDelay);
    }
  }

  function start() {
    animate();
  }
}
