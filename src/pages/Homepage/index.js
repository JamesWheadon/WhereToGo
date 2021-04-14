import React, { useState } from 'react';
import {Intro, Map} from '../../components';

const Homepage = () => {
  return (
    <main aria-label="main" className="container">
      <Intro />
      <Map />
    </main>
  )
}
export default Homepage;