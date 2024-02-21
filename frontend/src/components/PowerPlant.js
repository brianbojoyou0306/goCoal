import { Avatar, Space, Table } from "antd";
import { useEffect, useState } from "react";
import Records from "../list.json";
import Axios from "axios";

function Customers() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/users").then((res) => {
      setColumns(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  }, []);
    const status = "approved";
const statusClassName =
  status === "approved" ? "text-approved" : "text-declined";
    return (
      <div className="details">
        <h3>PowerPlant - Coal mines</h3>
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Issuing Authority</th>
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
                <td className={statusClassName}>
                  {record.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
export default Customers;
