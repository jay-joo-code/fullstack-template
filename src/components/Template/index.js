import React from 'react';
import axios from 'axios';

const Template = () => {
    axios.get('/api')
        .then(r => console.log(r))
        .catch(e => console.log(e))
    
    return (
        <div>template</div>
        )
}

export default Template
