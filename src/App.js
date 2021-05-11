import './App.css';
import React, { useState} from 'react';
import './components/Modal'
import Modal from './components/Modal';
import LogiqueModal from './components/LogiqueModal';

function App() {

  const {open, toggle, closed} = LogiqueModal();

  
  return (
  <div className='App'>
    
      <button 
      onMouseEnter={toggle}
      onMouseLeave={toggle}>
        Popup
      </button>
      <Modal
        open={open}
        closed={toggle}
      />
  </div>
  )
}

export default App;
