import React from 'react';
import {useParams} from 'react-router-dom';
import {Location} from '../../components';
import {Header} from '../../layout';

const Destination = ({destinations}) => {
    console.log(destinations)
    const renderDestination = () => {
        let { id } = useParams();
        if (id) {
            return destinations.filter(l => l.id == id).map(l => 
                <Location place={l} key={l.id}/>
            );
        }
        return destinations.map(l => 
            <Location place={l} key={l.id}/>
        );
    }

    return (
        <main aria-label="main" className="container">
            <Header />
            {renderDestination()}
        </main>
    )
}

export default Destination;