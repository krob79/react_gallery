import React from 'react';
import Photo from './Photo';

const PhotoContainer = (props) =>{      
        let photos = props.photos.map( (photo) => {
            return (
                <li key={photo.id.toString()}>
                    <Photo server={photo.server} id={photo.id} secret={photo.secret} sizesuffix={'_q'} />
                </li>
            );
            
        });

        return(
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    { photos }
                    <li className="not-found">
                            <h3>No Results Found</h3>
                            <p>You search did not return any results. Please try again.</p>
                    </li>
               
                </ul>
            </div>
        );
}

export default PhotoContainer;
