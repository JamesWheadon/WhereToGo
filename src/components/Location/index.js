import React from 'react';

const Location = ({place}) => {

    console.log('recieved', place.id, place)

    return (
        <>
            <h2>{place.name}</h2>
            <img src={place.image} />
            <p>{place.summary}</p>
        </>
    );
}

export default Location;