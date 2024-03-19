import React, { useState } from "react";
const Plant = ({ open, onClose,item }) => {
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
            <p>{item.name}</p>
            <h1>STARTING - ENDING</h1>
            <div className="input_fields">
              <input
                className="input__plant"
                type="number"
                placeholder="Required Coal in Tons"
              />
              <input
                className="input__plant"
                type="date"
                placeholder="Enter the delivery date"
              />
            </div>
          </div>

          <div className="btnContainer">
            <button className="btnPrimary" onClick={onClose} >
              <span className="bold" >ORDER</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plant;
