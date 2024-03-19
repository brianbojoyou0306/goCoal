import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders } from "../API";
import Powerplant from "./PowerPlant";
import Chart from "./CoalChart";
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
import axios from "axios";

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
                      padding: 8,
                    }}
                  />
                }
                title={"Coal Stocks Available"}
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
                title={"Inventory"}
                value={inventory}
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
                title={"Required Coal Stocks"}
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
  const [items, setitems] = useState();

  const [data, setData] = useState({  coaltype: "" });
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, "coaltype": input.value });
  };

  const handleSubmit = async (e) => {
    setitems([])
    const params = {
      coaltype: data.coaltype
    };
    
    const res = await axios.get("http://localhost:8080/api/getcoaltype",{params})
        setitems(res.data)
       
  }
  return (
    <div className="coal__next" id="power">
      <div className="search__part">
        <input className="search" type="text" placeholder="Search" value={data.coaltype} onChange={handleChange}></input>
        <button className="search_btn" onClick={handleSubmit}>Search</button>
      </div>
      
      {items && <Powerplant  item ={items} key ={items.id}/>}
    </div>
  );
}
export default Dashboard;
