import React from 'react';
import {Map, Location} from '../../components';
import {Header} from '../../layout';

const RoadTrip = ({destinations}) => {
  return (
    <main aria-label="main" className="container">
      <Header />
      <Map interactive={false}/>
    </main>
  )
}
export default RoadTrip;