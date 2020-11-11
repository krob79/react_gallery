import React from 'react';
import Photo from './Photo';

const PhotoContainer = (props) =>{     
        // Load up photos array with everything that was passed in from props
        let photos = props.photos.map( (photo) => {
            return (
                <li key={photo.id.toString()}>
                    <Photo server={photo.server} id={photo.id} secret={photo.secret} sizesuffix={'_q'} />
                </li>
            );
            
        });

        return(
            <div className="photo-container">
                {/* Don't display a results title if no results exist */}
                { 
                        (props.photos.length > 0)
                        ?
                        <h2>{props.title}</h2>
                        :
                        <div></div>
                }
                {/* If the photos array length is larger than 0, display its contents, otherwise show the No Results display */}
                { 
                    (props.photos.length > 0)
                    ?
                    <ul>
                    {photos}
                    </ul>
                    :
                    <div className="not-found">
                        <img src={process.env.PUBLIC_URL + '/noresults.gif'} alt={'No results'}/>
                        <p>Your search did not return any results. Please try again.</p>
                    </div>
                } 
            </div>
        );
}

export default PhotoContainer;
