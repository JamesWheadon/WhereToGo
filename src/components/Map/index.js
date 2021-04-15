import React, { useRef, useEffect } from 'react';

const Map = ({ interactive, stops }) => {

  useEffect(() => {
    if (!interactive) {
      roadTrip();
    }
  }, [stops])

  const locations = [{ id: 1, x: 483, y: 982 }, { id: 2, x: 529, y: 561 }, { id: 3, x: 489, y: 717 }, { id: 4, x: 841, y: 905 }]

  const getCursorPosition = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const nearest = findNearest(x, y);
    window.location.assign(window.location + `locations/${nearest.id}`)
  }

  const roadTrip = () => {
    if (stops.length != 0) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      let places = []
      stops.forEach(s => {
        let location = locations.filter(l => l.id === s)[0];
        context.beginPath();
        context.arc(location.x, location.y, 10, 0, 2 * Math.PI);
        context.fillStyle = '#FF0000';
        context.fill();
        places.push(location)
      })
      context.beginPath();
      context.moveTo(places[0].x, places[0].y)
      for (let i = 1; i < places.length; i++) {
        context.lineTo(places[i].x, places[i].y)
      }
      context.stroke();
    }
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
      {interactive ? 
      <canvas id="map" height="1080px" width="900px" onClick={getCursorPosition} ref={canvasRef}></canvas> : 
      <canvas id="map" height="1080px" width="900px" ref={canvasRef}></canvas>}
    </>
  );
};

export default Map;