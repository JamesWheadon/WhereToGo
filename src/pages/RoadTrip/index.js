import React, { useState, useLayoutEffect } from 'react';
import { Map, Location, NewStop } from '../../components';
import { Header } from '../../layout';

const RoadTrip = ({ destinations }) => {
    const [stops, setStops] = useState([])
    const [locations, setLocations] = useState([])
    const [numStops, setNumStops] = useState(1)
    const [possibleStops, setPossibleStops] = useState(destinations.map(m => m))

    useLayoutEffect(() => {
        getStops();
    }, [numStops])

    const getStops = () => {
        try {
            let placesSummary = locations;
            let places = stops;
            while (places.length < numStops) {
                const random = Math.floor(Math.random() * possibleStops.length);
                const stop = possibleStops.splice(random, 1)[0];
                if (!stop) {
                    throw new Error('Out of locations')
                }
                placesSummary.push(stop);
                places.push(stop.id);
            }
            console.log('update')
            setLocations(placesSummary);
            setStops(places);
        } catch (err) {
            console.log('You\'re going everywhere already!')
        }
    };

    const newStop = () => setNumStops(prevState => prevState + 1);

    const renderStops = () => {
        console.log('locations', locations)
        return locations.map(l =>
            <Location place={l} key={l.id} />
        );
    }

    return (
        <main aria-label="main" className="container">
            <Header />
            <h2>Ready To Go?</h2>
            <Map interactive={false} stops={stops} />
            <NewStop clickFunction={newStop} />
            {renderStops()}
        </main>
    )
}
export default RoadTrip;