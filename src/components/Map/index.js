import React from 'react';

const Map = () => {

  const getCursorPosition = (canvas, event) => {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    console.log("x: " + x + " y: " + y)
}

  const canvas = document.querySelector('canvas')
  canvas.addEventListener('mousedown', function(e) {
      getCursorPosition(canvas, e)
  })

  return (
    <>
      <canvas id="map" height="1080px" width="900px"></canvas>
    </>
  );
};

export default Map;