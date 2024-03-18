import React, { useState } from "react";
const Plant = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalRight">
          <p className="closeBtn" onClick={onClose}>
            CLOSE
          </p>
          <div className="content">
            <p>PowerPlant ABC</p>
            <h1>STARTING - ENDING</h1>
            <div>
              <input className="input__plant" type="number" placeholder="Enter how much Tons you need" />
            </div>
          </div>

          <div className="btnContainer">
            <button className="btnPrimary">
              <span className="bold">ACCEPT</span>
            </button>
            <button className="btnOutline">
              <span className="bold">REJECT</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plant;
