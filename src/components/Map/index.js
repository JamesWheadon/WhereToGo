import React, { useRef } from 'react';

const Map = ({ interactive, stops }) => {

  const locations = [{ id: 1, x: 483, y: 982 }, { id: 2, x: 529, y: 561 }, { id: 3, x: 489, y: 717 }, { id: 4, x: 841, y: 905 }, { id: 5, x: 631, y: 908 }, { id: 6, x: 326, y: 477 }, { id: 7, x: 450, y: 258 }]

  const getCursorPosition = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const nearest = findNearest(x, y);
    window.location.assign(window.location + `locations/${nearest.id}`)
  }

  const roadTrip = () => {
    console.log('called with', stops)
    if (stops.length != 0) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      let places = []
      stops.forEach(s => {
        let location = locations.filter(l => l.id === s)[0];
        context.beginPath();
        context.arc(location.x, location.y, 10, 0, 2 * Math.PI);
        context.fillStyle = '#FF0000';
        context.fill();
        places.push(location)
      })
      shortestTrip(places, context)
    }
  }

  const shortestTrip = (places, context) => {
    let adjacencyMatrix = [];
    places.forEach(p1 => {
      let matrixRow = [];
      places.forEach(p2 => {
        matrixRow.push(Math.sqrt(Math.abs(p1.x - p2.x) ** 2 + Math.abs(p1.y - p2.y) ** 2))
      })
      adjacencyMatrix.push(matrixRow);
    })
    let count = [];
    let subplots = [];
    while (count.length / 2 < places.length - 1) {
      let min = shortestDistance(adjacencyMatrix)
      context.beginPath();
      context.moveTo(places[min.i].x, places[min.i].y)
      context.lineTo(places[min.j].x, places[min.j].y)
      context.stroke();
      adjacencyMatrix[min.i][min.j] = 0;
      adjacencyMatrix[min.j][min.i] = 0;
      if (count.includes(min.i)) {
        for (let k = 0; k < adjacencyMatrix.length; k++) {
          adjacencyMatrix[k][i] = 0;
          adjacencyMatrix[i][k] = 0;
        }
      }
      if (count.includes(min.j)) {
        for (let k = 0; k < adjacencyMatrix.length; k++) {
          adjacencyMatrix[k][j] = 0;
          adjacencyMatrix[j][k] = 0;
        }
      }
      count.push(min.i, min.j);
    }
  }

  const shortestDistance = (matrix) => {
    let min = {d: 1400};
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < i; j++) {
        let c = matrix[i][j];
        if (c < min.d && c != 0) {
          min.d = c;
          min.i = i;
          min.j = j;
        }
      }
    }
    return min;
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
      {!interactive ? roadTrip() : console.log('not interactive')}
    </>
  );
};

export default Map;