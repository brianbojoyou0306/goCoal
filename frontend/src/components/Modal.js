import React, { useState } from "react";
import Expand from "./Expand";
const Modal = ({ open, onClose }) => {
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
                      
            <Expand>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              esse vero voluptatem, sapiente blanditiis vitae dolorem asperiores
              enim dignissimos explicabo officiis iste suscipit harum
              repudiandae ipsam excepturi illo cumque consequatur! Ut deserunt
              necessitatibus vero laudantium rerum atque quasi sint iure amet
              dolores repudiandae voluptatibus repellat, assumenda vel ad enim
              nesciunt quisquam sequi.
            </Expand>
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

export default Modal;
