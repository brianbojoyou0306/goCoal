import Records from "../logistics.json";
import ReactModal from "react-modal";
import React, { useState } from "react";
import Modal from "./Modal";
function Customers() {
  return (
    <div className="details">
      <h3>Your Orders</h3>
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Starting</th>
            <th>Ending</th>
            <th>Duration</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Records.map((record, index) => (
            <tr key={index}>
              <td>{record.order}</td>
              <td>{record.date}</td>
              <td>{record.issue}</td>
              <td>{record.duration}</td>

              <td className="logistics_status">
                Accepted
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Customers;
