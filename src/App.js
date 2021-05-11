import './App.css';
import React, { useState} from 'react';
import './components/Modal'
import Modal from './components/Modal';
import LogiqueModal from './components/LogiqueModal';

function App() {

  const {revele, toggle} = LogiqueModal();

  
  return (
  <div className='App'>
    
      <button className='button' onClick={toggle}></button>
      <Modal
        revele={revele}
        cache={toggle}
      />
  </div>
  )
}

export default App;
