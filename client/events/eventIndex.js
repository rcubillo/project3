import React from 'react';
import eventIndex from 'eventIndex'

import eventApp from './eventApp';

const eventIndex = ({cityEvents , handleEventSelect}) => {
    return (
        <div onClick={ () => handleEventSelect(cityEvents)} >
            eventIndex.render(< eventApp/>, ({cityEvents}));
            </div>
        
    )
};

export default eventIndex;