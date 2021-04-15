import React from 'react';
import { Location } from '../../components';
import { Header } from '../../layout';

const Adventure = ({ destinations }) => {
    const renderAdventure = () => {
        const id = Math.random() * destinations.length + 1;
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