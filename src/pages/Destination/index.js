import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {Location} from '../../components';
import {Header} from '../../layout';

const Destination = () => {

    const [destination, setDestination] = useState([
        {id: 1, name: "Dartmoor", image: "https://eu-assets.simpleview-europe.com/southdevon2018/imageresizer/?image=%2Fdmsimgs%2FDartmoor%20Grey%20Wethers%20stone%20circle.jpg&action=ProductDetailPro", summary: "There is a reason there was a max security prison and an army base located here!"}, {id: 2, name: "Windermere", image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Windermere_Lake_District_from_hill.JPG", summary: "Lots of water."}, {id: 3, name: "Snowdon", image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Snowdon_massif.jpg", summary: "Big hill."}, {id: 4, name: "Dover", image: "https://upload.wikimedia.org/wikipedia/commons/7/74/White_Cliffs_of_Dover_02.JPG", summary: "Look at France, can't go there yet."}
    ])

    const renderDestination = () => {
        let { id } = useParams();
        if (id) {
            return destination.filter(l => l.id == id).map(l => 
                <Location place={l} key={l.id}/>
            );
        }
        return destination.map(l => 
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