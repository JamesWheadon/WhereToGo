import React from 'react';
import {Intro, MapTagline, Map} from '../../components';
import {Header} from '../../layout';

const Homepage = () => {
  return (
    <main aria-label="main" className="container">
      <Header />
      <Intro />
      <MapTagline />
      <Map interactive={true}/>
    </main>
  )
}
export default Homepage;