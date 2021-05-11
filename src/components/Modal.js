import React, { Component } from 'react';
import { useState } from 'react';

const Modal =({open,close}) => open ? (

    <React.fragment>
        <div className="overlay">
            <p>voici la modal info</p>
        </div>

    
    </React.fragment>
) : null;

export default Modal