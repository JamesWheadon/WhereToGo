import React from 'react';

const Map = () => {

  const locations = [{id: 1, x: 177, y: 800}, {id: 2, x: 134, y: 380}, {id: 3, x: 180, y: 531}, {id: 4, x: 443, y: 726}]

  const getCursorPosition = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    console.log("x: " + x + " y: " + y);
    const nearest = findNearest(x, y);
    console.log(nearest);
    //window.location.assign(window.location + `locations/${nearest.id}`)
  }

  const findNearest = (x, y) => {
    let closest = {};
    locations.forEach(loc => {
      let distance = Math.sqrt(Math.abs(x - loc.x) ** 2 + Math.abs(y - loc.y) ** 2);
      console.log(distance);
      if (closest.id) {
        if (distance < closest.distance) {
          closest.id = loc.id;
          closest.distance = distance;
        }
      } else {
        closest.id = loc.id;
        closest.distance = distance;
      }
    })
    return closest;
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