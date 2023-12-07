import React, { useRef } from 'react';
import '../App.css';

const Popup = ({ show, message, onClose }) => {
    if (!show) return null;
  
    return (
      <div className="popup">
        <div className="popup-inner">
          <h3>{message}</h3>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
};

export default Popup