import React from 'react';
import './Modal.css'


const Modal =({revele}) => revele ? (

    
        <div className="modale">
            
            <h1>Planet name</h1>
            
            <p>diameter:</p>
            <p>population:</p>
            <p>position:</p>
        </div>

    
    
) : null;

export default Modal