import React from 'react';
import ReactDOM from 'react-dom';
import eventIndex from 'eventIndex';
import '../core/Menu'

import './eventApp';

const eventIndex = ({cityEvents}) => {
    return (
        <div onClick={ () =>(cityEvents)}>
            
            <div className='content'>
               ReactDOM.render(<eventApp />)
            </div>
        </div>
    )
};

export default eventIndex;