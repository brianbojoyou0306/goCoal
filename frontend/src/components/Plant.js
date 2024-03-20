import React, { useState } from "react";
import axios from "axios";
const Plant = ({ open, onClose,item }) => {
  if (!open) return null;

  // const [data, setData] = useState({ reqStock: "", Date: "" });
  // // eslint-disable-next-line
  // const [error, setError] = useState(""); 
  // const handleChange = ({ currentTarget: input }) => {
  //   setData({ ...data, [input.placeholder]: input.value });
  //   console.log(input.type);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(data);

  //   try {
  //     const url = "http://localhost:8080/api/buycoal";
  //     console.log(data);

  //     const { data: res } = await axios.post(url, data);
  //     onClose()
  //     console.log(res);
    
  //   } catch (error) {
  //     if (
  //       error.response &&
  //       error.response.status >= 400 &&
  //       error.response.status <= 500
  //     ) {
  //       setError(error.response.data.message);
  //       console.log(error);
  //     }
  //   }
  // };


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
                placeholder="reqStock"
              />
              <input
                className="input__plant"
                type="date"
                placeholder="Date"
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
