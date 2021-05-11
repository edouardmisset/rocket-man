import React from 'react';
import './Modal.css'


const Modal =({revele, cache}) => revele ? (

    
        <div className="modale">
            <button onClick={cache}>X</button>
            <h1>Planet name</h1>
            
            <p>diameter:</p>
            <p>population:</p>
            <p>position:</p>
        </div>

    
    
) : null;

export default Modal