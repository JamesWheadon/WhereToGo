import React, { useState, useEffect } from 'react';
import { Map, Location } from '../../components';
import { Header } from '../../layout';

const RoadTrip = ({ destinations }) => {
    const [stops, setStops] = useState([])
    const [locations, setLocations] = useState([])

    useEffect(() => {
        getStops();
    }, [])

    const getStops = () => {
        let copy = destinations.map(m => m);
        let placesSummary = [];
        let places = [];
        while (places.length < 3) {
            const random = Math.floor(Math.random() * copy.length);
            const stop = copy.splice(random, 1)[0];
            placesSummary.push(stop)
            places.push(stop.id)
        }
        setLocations(placesSummary)
        setStops(places)
        console.log(destinations)
    }

    const renderStops = () => {
      return locations.map(l =>
        <Location place={l} key={l.id}/>
      );
    }

    return (
        <main aria-label="main" className="container">
            <Header />
            <h2>Ready To Go?</h2>
            <Map interactive={false} stops={stops} />
            {renderStops()}
        </main>
    )
}
export default RoadTrip;