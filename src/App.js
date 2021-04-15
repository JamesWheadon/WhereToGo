import React, {useState} from 'react';
import { Switch, Route } from 'react-router-dom';

import {Homepage, Destination, RoadTrip} from './pages';

function App() {
  const [destination, setDestination] = useState([
      {id: 1, name: "Dartmoor", image: "https://eu-assets.simpleview-europe.com/southdevon2018/imageresizer/?image=%2Fdmsimgs%2FDartmoor%20Grey%20Wethers%20stone%20circle.jpg&action=ProductDetailPro", summary: "There is a reason there was a max security prison and an army base located here!"},
      {id: 2, name: "Windermere", image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Windermere_Lake_District_from_hill.JPG", summary: "Lots of water."},
      {id: 3, name: "Snowdon", image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Snowdon_massif.jpg", summary: "Big hill."},
      {id: 4, name: "Dover", image: "https://upload.wikimedia.org/wikipedia/commons/7/74/White_Cliffs_of_Dover_02.JPG", summary: "Look at France, can't go there yet."}
  ])
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/Locations">
          <Destination destinations={destination}/>
        </Route>
        <Route path="/Locations/:id">
          <Destination destinations={destination} />
        </Route>
        <Route path="/Road_Trip">
          <RoadTrip destinations={destination}/>
        </Route>
      </Switch>
    </>
  );
};

export default App;