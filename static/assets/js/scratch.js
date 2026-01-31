/**
* Draws a brush stroke that follows the provided path. The brushes are randomly selected and rotated.
* 
* @param {*} brushPaths Array of paths to the brushes to use
* @param {*} curve If of the curve that should be followed
* @param {*} canvas Id of the canvas to draw the stroke
* @param {*} startFrame The frame in which the animation should start (avoids weird pre-draw issues)
* @param {*} totalFrames The number of frames the animation has  
* @param {*} interpolationSteps How many brushes should be drawn in between frames
* @param {*} brushSize The size of the brush stroke
*/
function animateScratch(brushPaths, curve, canvasName, startFrame, totalFrames, interpolationSteps, brushSize) {
  // Fetch the 2d context for the selected canvas
  const canvas = document.getElementById(canvasName);
  const ctx = canvas.getContext("2d");
  
  // Fetch the path that the brush will follow
  const pathElement = document.getElementById(curve);
  const pathLength = pathElement.getTotalLength();
  
  const bbox = pathElement.getBBox();
  const padding = brushSize / 4;
  
  const paddedBBox = {
    x: bbox.x - padding,
    y: bbox.y - padding,
    width: bbox.width + padding * 2,
    height: bbox.height + padding * 2
  };
  
  const scaleX = canvas.width / paddedBBox.width;
  const scaleY = canvas.height / paddedBBox.height;
  
  const offsetX = -paddedBBox.x * scaleX;
  const offsetY = -paddedBBox.y * scaleY;
  
  let frame = startFrame;
  
  // Load the brush textures
  const brushes = brushPaths.map(src => {
    const img = new Image();
    img.src = src;
    return img;
  });
  
  // Wait until all brushes are loaded
  Promise.all(
    brushes.map(
      img =>
        new Promise(resolve => {
        img.onload = resolve;
      })
    )
  ).then(startScratch);
  
  function startScratch() {
    requestAnimationFrame(stepScratch);
  }
  
  function stepScratch() {
    if (frame > totalFrames) return;
    
    // Pick a random brush each frame
    const brush = brushes[Math.floor(Math.random() * brushes.length)];
    
    const progress = easeInOutCubic(frame / totalFrames);
    const pathPos = progress * pathLength;
    
    for (let i = 0; i < interpolationSteps; i++) {
      if (pathPos + i >= pathLength) break;
      const point = pathElement.getPointAtLength(pathPos + i);
      
      ctx.save();
      ctx.translate(point.x * scaleX + offsetX, point.y * scaleY + offsetY);
      ctx.rotate(Math.random() * 0.3 - 0.15);
      ctx.globalAlpha = 0.8 + Math.random() * 0.2;
      ctx.drawImage(brush, -brushSize / 2, -brushSize / 2, brushSize, brushSize);
      ctx.restore();
    }
    
    frame++;
    requestAnimationFrame(stepScratch);
  }
}

// Smooth ease in-out function 
function easeInOutCubic(x) {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}