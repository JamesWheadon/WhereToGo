import React, {useState} from 'react';
import {Location, Intro} from '../../components'

const Destination = () => {

    const [destination, setDestination] = useState([
        {id: 1, name: "Dartmoor", image: "https://eu-assets.simpleview-europe.com/southdevon2018/imageresizer/?image=%2Fdmsimgs%2FDartmoor%20Grey%20Wethers%20stone%20circle.jpg&action=ProductDetailPro", summary: "There is a reason there was a max security prison and an army base located here!"}, {id: 2, name: "Windermere", image: "https://en.wikipedia.org/wiki/Windermere#/media/File:Windermere_Lake_District_from_hill.JPG", summary: "Lots of water."}, {id: 3, name: "Snowdon", image: "https://en.wikipedia.org/wiki/Snowdon#/media/File:Snowdon_massif.jpg", summary: "Big hill."}, {id: 4, name: "Dover", image: "https://en.wikipedia.org/wiki/White_Cliffs_of_Dover#/media/File:White_Cliffs_of_Dover_02.JPG", summary: "Look at France, can't go there yet."}
    ])

    const renderDestination = () => {
        return destination.map(l => 
            <Location place={l} key={l.id}/>
        );
    }

    return (
        <main aria-label="main" className="container">
            {renderDestination()}
        </main>
    )
}

export default Destination;