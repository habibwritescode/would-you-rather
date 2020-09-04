import React from 'react';

import './avatar.css'

function Avatar(props) {
    return (
        <img className='avatar' src={props.source} alt='' />
    )
}

export default Avatar