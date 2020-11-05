import React from 'react';

const Dogs = ({match}) => {
        let test = match.params.name;
        return(
            <p>This is the DOGS components {match.params.name}</p>
        );
}

export default Dogs;