import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders } from "../API";
import Details from "./CoalDetails";
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
                title={"Stocks"}
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
  return (
    <div className="coal__next">
      <Details />
    </div>
  );
}
export default Dashboard;
