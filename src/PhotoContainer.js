import React from 'react';
import Photo from './Photo';

const PhotoContainer = (props) =>{     
        console.log("NUMBER OF RESULTS: " + props.photos.length); 
        let photos = props.photos.map( (photo) => {
            return (
                <li key={photo.id.toString()}>
                    <Photo server={photo.server} id={photo.id} secret={photo.secret} sizesuffix={'_q'} />
                </li>
            );
            
        });

        return(
            <div className="photo-container">
                { 
                        (props.photos.length > 0)
                        ?
                        <h2>Results</h2>
                        :
                        <div></div>
                }
                <ul>
                    { 
                        (props.photos.length > 0)
                        ?
                        photos
                        :
                        <li className="not-found">
                            <h1>No Results Found</h1>
                            <p>Your search did not return any results. Please try again.</p>
                        </li>
                    }
                </ul>
            </div>
        );
}

export default PhotoContainer;
