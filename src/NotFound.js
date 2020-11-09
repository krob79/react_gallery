import React from 'react';

const NotFound = () => (
    <div className="not-found">
        <img src={process.env.PUBLIC_URL + '/404.gif'} alt={'404 error'}/>
        <h3>Page Not Found</h3>
        <p>No content exists at this address. Please try again.</p>
    </div>
);

export default NotFound;