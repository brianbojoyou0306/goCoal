import Records from "../list.json";
import { useState } from "react";
import Plant from "./Plant";
function Customers(props) {
  const [openModal, setOpenModal] = useState(false);
  const { item } = props;
  return (
    <div className="details">
      <h3>OUR Recomendations</h3>
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Coal Mine Name</th>
            <th>Location </th>
            <th>Stocks Availabe</th>
            <th>Place order</th>
          </tr>
        </thead>
        <tbody>
          {Records.map((item, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{item.name}</td>
              <td>{item.location}</td>
              <td>{item.avlStocks}</td>
              <td>
                <button
                  className="plant__btn"
                  onClick={() => setOpenModal(true)}
                >
                  Order
                </button>
                <Plant open={openModal} onClose={() => setOpenModal(false)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Customers;
