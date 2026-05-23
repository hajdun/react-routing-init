// src/App.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { dogs } from "../dogData/puppies"

// this page should be routed under /puppies/:id
// here you need to get the "id" data from the url
// display puppy data for the id
// e. g. if you navigate to /puppies/2
// "Tiny Menace" 's profile should be displayed as follows:

// Puppy profile!
// Tiny Menace
// Do not let the size fool you. She has already claimed the sofa, the remote, and your heart.

const PuppyProfile = () => {
    const { id } = useParams()

    const currentPuppy = dogs.find(dog => dog.id.toString() === id)
    return (
        <div>
            <div>
                Puppy profile!
            </div>

            <div>
                {currentPuppy.name}
            </div>

            <div>
                {currentPuppy.desc}
            </div>
        </div>
    );
}

export default PuppyProfile;