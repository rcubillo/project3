import React from 'react';
import eventIndex from 'eventIndex'

import eventApp from './eventApp';

const eventIndex = ({cityEvents , handleEventSelect}) => {
    return (
        <div onClick={ () => handleEventSelect(cityEvents)} className=' video-item item'>
            
            <div className='content'>
                <div className='header '>bal aan eego</div>
            </div>
        </div>
    )
};

export default eventIndex;