import { Card, Space, Statistic } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders } from "../API";
import Chart from "./CoalChart";
import Carousel from "react-bootstrap/Carousel";
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
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./coal.css";
import { useNavigate } from "react-router-dom";
import Records from "../list.json";
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
    getOrders().then((res) => {
      setOrders(res.total);
      setRevenue(res.discountedTotal);
    });
    getInventory().then((res) => {
      setInventory(res.total);
    });
    getCustomers().then((res) => {
      setCustomers(res.total);
    });
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
                      padding: 10,
                    }}
                  />
                }
                title={"Current Stocks"}
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
                      padding: 10,
                    }}
                  />
                }
                title={"Orders Recived"}
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
                      padding: 10,
                    }}
                  />
                }
                title={"Active Users"}
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
                title={"Total Sales"}
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
    const possibleDataSets = [
      dummyData1,
      dummyData2,
      dummyData3,
      dummyData4,
      dummyData5,
      dummyData6,
    ];
    // Randomly select a data set from the array
    const randomIndex = Math.floor(Math.random() * possibleDataSets.length);
    const randomDataSet = possibleDataSets[randomIndex];
    // Add the selected data set to the existing selected datasets
    setSelectedData((prevSelectedData) => [...prevSelectedData, randomDataSet]);
  };
  return (
    <div className="coal__next">
      <Popup
        trigger={<button className="btn__request"> Requests </button>}
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <div className="content">
              <Carousel data-bs-theme="dark">
                <Carousel.Item>
                  <p>PowerPlant ABC</p>
                  <h1>BCD1 - BCD2</h1>
                  <Expand>
                    Our facility utilizes cutting-edge technology to generate
                    clean, reliable energy, powering communities efficiently and
                    responsibly. With a focus on environmental stewardship, we
                    employ advanced systems to minimize emissions and maximize
                    efficiency. At the heart of our operations lies a commitment
                    to delivering uninterrupted power while prioritizing the
                    well-being of both people and the planet. Experience the
                    future of energy production with us.
                  </Expand>
                  <div className="coal_req_buttons">
                    <button className="btnPrimary" onClick={handleButtonClick}>
                      <span onClick={close} className="bold">
                        ACCEPT
                      </span>
                    </button>
                    <button className="btnOutline">
                      <span onClick={close} className="bold">
                        REJECT
                      </span>
                    </button>
                  </div>
                  <br />
                </Carousel.Item>
                <Carousel.Item>
                  <p>PowerPlant ABC</p>
                  <h1>BCD2 - BCD4</h1>
                  <Expand>
                    Our facility utilizes cutting-edge technology to generate
                    clean, reliable energy, powering communities efficiently and
                    responsibly. With a focus on environmental stewardship, we
                    employ advanced systems to minimize emissions and maximize
                    efficiency. At the heart of our operations lies a commitment
                    to delivering uninterrupted power while prioritizing the
                    well-being of both people and the planet. Experience the
                    future of energy production with us.
                  </Expand>
                  <div className="coal_req_buttons">
                    <button className="btnPrimary" onClick={handleButtonClick}>
                      <span onClick={close} className="bold">
                        ACCEPT
                      </span>
                    </button>
                    <button className="btnOutline">
                      <span onClick={close} className="bold">
                        REJECT
                      </span>
                    </button>
                  </div>
                  <br />
                </Carousel.Item>
                <Carousel.Item>
                  <p>PowerPlant ABC</p>
                  <h1>BCD7 - BCD8</h1>
                  <Expand>
                    Our facility utilizes cutting-edge technology to generate
                    clean, reliable energy, powering communities efficiently and
                    responsibly. With a focus on environmental stewardship, we
                    employ advanced systems to minimize emissions and maximize
                    efficiency. At the heart of our operations lies a commitment
                    to delivering uninterrupted power while prioritizing the
                    well-being of both people and the planet. Experience the
                    future of energy production with us.
                  </Expand>
                  <div className="coal_req_buttons">
                    <button className="btnPrimary" onClick={handleButtonClick}>
                      <span onClick={close} className="bold">
                        ACCEPT
                      </span>
                    </button>
                    <button className="btnOutline">
                      <span onClick={close} className="bold">
                        REJECT
                      </span>
                    </button>
                  </div>
                  <br />
                </Carousel.Item>
              </Carousel>
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
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((selectedDataSet, index) =>
            selectedDataSet.map((item, idx) => (
              <tr key={`${index}-${idx}`}>
                <td className="updated">{item.order}</td>
                <td className="updated">{item.date}</td>
                <td className="updated">{item.issue}</td>
                <td className="updated">{item.duration}</td>
                <td className="updated">{item.status}</td>
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
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const dummyData1 = [
  {
    order: 6,
    date: "11/01/2024",
    issue: "ABC1",
    duration: "5 day",
    status: "Approved",
  },
];
const dummyData2 = [
  {
    order: 7,
    date: "03/02/2024",
    issue: "ABC1",
    duration: "3 day",
    status: "Approved",
  },
];
const dummyData3 = [
  {
    order: 8,
    date: "14/01/2024",
    issue: "ABC1",
    duration: "4 day",
    status: "Approved",
  },
];
const dummyData4 = [
  {
    order: 9,
    date: "24/02/2024",
    issue: "ABC1",
    duration: "4 day",
    status: "Approved",
  },
];
const dummyData5 = [
  {
    order: 10,
    date: "01/02/2024",
    issue: "ABC1",
    duration: "3 day",
    status: "Approved",
  },
];
const dummyData6 = [
  {
    order: 11,
    date: "09/02/2024",
    issue: "ABC1",
    duration: "1 day",
    status: "Approved",
  },
];

export default Dashboard;
