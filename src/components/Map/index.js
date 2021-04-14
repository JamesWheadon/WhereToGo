import React, {useRef} from 'react';

const Map = () => {

  const locations = [{id: 1, x: 483, y: 982}, {id: 2, x: 529, y: 561}, {id: 3, x: 489, y: 717}, {id: 4, x: 841, y: 905}]

  const getCursorPosition = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const nearest = findNearest(x, y);
    window.location.assign(window.location + `locations/${nearest.id}`)
  }

  const findNearest = (x, y) => {
    let closest = {};
    locations.forEach(loc => {
      let distance = Math.sqrt(Math.abs(x - loc.x) ** 2 + Math.abs(y - loc.y) ** 2);
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

  const canvasRef = useRef(null)

  return (
    <>
      <h3>Click where you would like to go!</h3>
      <canvas id="map" height="1080px" width="900px" onClick={getCursorPosition} ref={canvasRef}></canvas>
    </>
  );
};

export default Map;