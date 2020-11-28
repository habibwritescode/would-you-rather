import React, { useState } from 'react';
import Nav from '../nav/Nav';

import './burger.css'

const Burger = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='burger-cont' onClick={() => setOpen(!open)}>
                <div className={`bar ${open ? 'open bar-open-color' : 'close bar-close-color'}`} />
                <div className={`bar ${open ? 'open bar-open-color' : 'close bar-close-color'}`} />
                <div className={`bar ${open ? 'open bar-open-color' : 'close bar-close-color'}`} />
            </div>
            <Nav closeNavOnLinkClick={(e) => e.target.id === 'event-target' && setOpen(!open)} open={open} />
        </>
    )
}

export default Burger;