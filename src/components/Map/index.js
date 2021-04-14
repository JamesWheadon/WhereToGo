import React from 'react';

const Map = () => {

  const locaitons = [{id: 1, x: 177, y: 800}, {id: 2, x: 229, y: 385}, {id: 3, x: 180, y: 531}, {id: 4, x: 443, y: 726}]

  const getCursorPosition = (event) => {
    const x = event.clientX
    const y = event.clientY
    console.log("x: " + x + " y: " + y)
  }

  /*const getCursorPosition = (canvas, event) => {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    console.log("x: " + x + " y: " + y)
  }*/

  return (
    <>
      <canvas id="map" height="1080px" width="900px" onClick={getCursorPosition}></canvas>
    </>
  );
};

export default Map;