import React, { useState } from "react";
import Plant from "./Plant";
import Records from "../list.json";

function Customers() {
  const [openModal, setOpenModal] = useState(false);
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [orders, setOrders] = useState([]); // State to hold orders

  const handleOrderButtonClick = (item) => {
    setOpenModal(true);
    setSelectedItem(item);
  };

  const handleOrderQuantityChange = (event) => {
    setOrderQuantity(event.target.value);
  };

  const placeOrder = () => {
    const order = { item: selectedItem, quantity: orderQuantity }; // Create an order object
    setOrders((prevOrders) => [...prevOrders, order]); // Update state with new array of orders
    setOpenModal(false);
    setSelectedItem(null);
    setOrderQuantity(0);
  };

    const [inputValue, setInputValue] = useState("");
    const [tableData, setTableData] = useState([]);

    // Function to handle input change
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    // Function to handle adding value to the table
    const handleAddValue = () => {
      if (inputValue.trim() !== "") {
        setTableData([...tableData, inputValue]);
        setInputValue(""); // Clear input after adding value
      }
    };

  return (
    <div className="details">
      <h3>OUR Recommendations</h3>
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Coal Mine Name</th>
            <th>Location </th>
            <th>Stocks Available</th>
            <th>Place order</th>
            <th>Order Quantity</th> {/* New column for order quantity */}
          </tr>
        </thead>
        <tbody>
          {Records.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.location}</td>
              <td>{item.avlStocks}</td>
              <td>
                <button
                  className="plant__btn"
                  onClick={() => handleOrderButtonClick(item)}
                >
                  Order
                </button>
              </td>

              <td>
                {tableData.map((value, index) => (
                  <tr key={index}>
                    <td>{value}</td>
                  </tr>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Plant
        open={openModal}
        onClose={() => setOpenModal(false)}
        onOrder={placeOrder}
      />
    </div>
  );
}

export default Customers;
