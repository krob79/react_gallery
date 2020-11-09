import React from 'react';

const Loading = () => {
    return(
        <img src={process.env.PUBLIC_URL + '/loading.gif'} alt={'loading'}/>
    );
}

export default Loading;