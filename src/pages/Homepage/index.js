import React from 'react';
import {Intro, Map} from '../../components';
import {Header} from '../../layout';

const Homepage = () => {
  return (
    <main aria-label="main" className="container">
      <Header />
      <Intro />
      <Map />
    </main>
  )
}
export default Homepage;