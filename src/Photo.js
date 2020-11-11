import React from 'react';

const Photo = (props) => {
    //Assemble Flickr URL using data from props
    let server = props.server;
    let id = props.id;
    let secret = props.secret;
    //Suffix must include an underscore, then a letter, ex: _q, otherwise leave the suffix out completely
    let sizesuffix = props.sizesuffix;
    let alt = props.alt;

    return(
        <img src={`https://live.staticflickr.com/${server}/${id}_${secret}${sizesuffix}.jpg`} alt={alt} />
    );
}

export default Photo;