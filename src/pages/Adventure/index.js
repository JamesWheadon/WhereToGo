import React from 'react';
import { Location } from '../../components';
import { Header } from '../../layout';

const Adventure = ({ destinations }) => {
    const renderAdventure = () => {
        console.log(destinations)
        const id = Math.floor(Math.random() * destinations.length) + 1;
        console.log(id)
        return destinations.filter(l => l.id == id).map(l =>
            <Location place={l} key={l.id} />
        );
    }

    return (
        <main aria-label="main" className="container">
            <Header />
            {renderAdventure()}
        </main>
    )
}

export default Adventure;