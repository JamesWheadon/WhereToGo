import React from 'react';
import {Map, Location} from '../../components';
import {Header} from '../../layout';

const RoadTrip = () => {
  return (
    <main aria-label="main" className="container">
      <Header />
      <Map />
    </main>
  )
}
export default RoadTrip;