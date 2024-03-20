import React, { useState, useEffect } from "react";
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic } from "antd";
import Popup from "reactjs-popup";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./coal.css";
import { useNavigate } from "react-router-dom";
import { getCustomers, getInventory, getOrders } from "../API";
import Chart from "./LogiChart";
import Records from "../logistics.json";
import Expand from "./Expand";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("Type");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("OrganizationName");

    navigate("/login");
  };

  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const ordersData = await getOrders();
      setOrders(ordersData.total);
      setRevenue(ordersData.discountedTotal);

      const inventoryData = await getInventory();
      setInventory(inventoryData.total);

      const customersData = await getCustomers();
      setCustomers(customersData.total + customersData.total);
    };

    fetchData();
  }, []);

  const OrganizationName = localStorage.getItem("OrganizationName");

  return (
    <div>
      <div className="coal" id="coal">
        <div>
          <Space size={20} direction="vertical">
            <h2>{OrganizationName}</h2>
            <h4>DashBoard</h4>
            <Space direction="horizontal">
              <DashboardCard
                icon={
                  <ShoppingCartOutlined
                    style={{
                      color: "green",
                      backgroundColor: "rgba(0,255,0,0.25)",
                      borderRadius: 20,
                      fontSize: 24,
                      padding: 8,
                    }}
                  />
                }
                title={"XYZ"}
                value={orders}
              />
              <DashboardCard
                icon={
                  <ShoppingOutlined
                    style={{
                      color: "blue",
                      backgroundColor: "rgba(0,0,255,0.25)",
                      borderRadius: 20,
                      fontSize: 24,
                      padding: 8,
                    }}
                  />
                }
                title={"XYZ"}
                value={inventory}
              />
              <DashboardCard
                icon={
                  <UserOutlined
                    style={{
                      color: "purple",
                      backgroundColor: "rgba(0,255,255,0.25)",
                      borderRadius: 20,
                      fontSize: 24,
                      padding: 8,
                    }}
                  />
                }
                title={"Active"}
                value={customers}
              />
              <DashboardCard
                icon={
                  <DollarCircleOutlined
                    style={{
                      color: "red",
                      backgroundColor: "rgba(255,0,0,0.25)",
                      borderRadius: 20,
                      fontSize: 24,
                      padding: 8,
                    }}
                  />
                }
                title={"Sales"}
                value={revenue}
              />
            </Space>
            <Space>
              <DashboardChart />
            </Space>
          </Space>
        </div>

        <div>
          <div className="logout">
            <button onClick={logout}>Logout</button>
          </div>
          <Chart />
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

function DashboardChart() {
  const [selectedData, setSelectedData] = useState([]);

  const handleButtonClick = () => {
    // Define an array of possible data sets
    const possibleDataSets = [dummyData1, dummyData2, dummyData3];
    // Randomly select a data set from the array
    const randomIndex = Math.floor(Math.random() * possibleDataSets.length);
    const randomDataSet = possibleDataSets[randomIndex];
    // Add the selected data set to the existing selected datasets
    setSelectedData((prevSelectedData) => [...prevSelectedData, randomDataSet]);
  };

  return (
    <div className="coal__next">
      <Popup
        trigger={<button className="btn__request"> Request</button>}
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <div className="content">
              <p>PowerPlant ABC</p>
              <h1>BCD1 - BCD2</h1>
              <Expand>
                Our facility utilizes cutting-edge technology to generate clean,
                reliable energy, powering communities efficiently and
                responsibly. With a focus on environmental stewardship, we
                employ advanced systems to minimize emissions and maximize
                efficiency. At the heart of our operations lies a commitment to
                delivering uninterrupted power while prioritizing the well-being
                of both people and the planet. Experience the future of energy
                production with us.
              </Expand>
              <br />

            
              <button className="btnPrimary" onClick={handleButtonClick}>
                <span onClick={close} className="bold">
                  ACCEPT
                </span>
              </button>
            </div>
            <div>
              <button className="closeBtn " onClick={close}>
                Close modal
              </button>
            </div>
          </div>
        )}
      </Popup>

      <Table data={selectedData} />
    </div>
  );
}

function Table({ data }) {
  return (
    <div className="details">
      <h2>Received Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Starting</th>
            <th>Ending</th>
            <th>Duration</th>
          </tr>
        </thead>

        <tbody>
          {data.map((selectedDataSet, index) =>
            selectedDataSet.map((item, idx) => (
              <tr key={`${index}-${idx}`}>
                <td>{item.order}</td>
                <td>{item.date}</td>
                <td>{item.issue}</td>
                <td>{item.duration}</td>
              </tr>
            ))
          )}
        </tbody>
        <tbody>
          {Records.map((record, index) => (
            <tr key={index}>
              <td>{record.order}</td>
              <td>{record.date}</td>
              <td>{record.issue}</td>
              <td>{record.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const dummyData1 = [
  { order: 6, date: "2024-03-01", issue: "BCD1", duration: "12 days" },
];
const dummyData2 = [
  { order: 7, date: "2024-05-01", issue: "BCD3", duration: "23 days" },
];
const dummyData3 = [
  { order: 8, date: "2024-09-01", issue: "BCD2", duration: "12 days" },
];
const dummyData4 = [
  { order: 9, date: "2024-03-07", issue: "BCD5", duration: "21 days" },
];
const dummyData5 = [
  { order: 10, date: "2024-05-09", issue: "BCD8", duration: "26 days" },
];
const dummyData6 = [
  { order: 11, date: "2024-09-11", issue: "BCD9", duration: "12 days" },
];

export default Dashboard;
