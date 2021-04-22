import React, { useState, useEffect } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
import { Map, Location, NewStop } from '../../components';
import { Header } from '../../layout';
//import { loadNewStop } from '../../actions';

const RoadTrip = ({ destinations }) => {

    //const numStops = useSelector(state => state.numStops);
    //const orderedLocationIds = useSelector(state => state.orderedLocationIds);

    //const dispatch = useDispatch();

    const [stops, setStops] = useState([])
    const [locations, setLocations] = useState([])
    const [possibleStops] = useState(destinations.map(m => m))

    useEffect(() => {
        getStops();
    }, [numStops]);

    const getStops = () => {
        try {
            let placesSummary = locations.map(l => l);
            let places = stops.map(s => s);
            while (places.length < numStops) {
                const random = Math.floor(Math.random() * possibleStops.length);
                const stop = possibleStops.splice(random, 1)[0];
                if (!stop) {
                    throw new Error('Out of locations')
                }
                placesSummary.push(stop);
                places.push(stop.id);
            }
            setLocations(placesSummary);
            setStops(places);
        } catch (err) {
            console.log('You\'re going everywhere already!')
        }
    };

    const newStop = () => {
        dispatch(loadNewStop());
    };

    const renderStops = () => {
        return locations.map(l =>
            <Location place={l} key={l.id} />
        );
    };
    
    return (
        <main aria-label="main" className="container">
            <Header />
            <h2>Ready To Go?</h2>
            <Map interactive={false} stops={stops} />
            <NewStop clickFunction={newStop} />
            {renderStops()}
        </main>
    );
}
export default RoadTrip;