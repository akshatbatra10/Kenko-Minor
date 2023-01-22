import {
  AiOutlinePieChart,
  AiOutlineGroup,
  AiOutlineBulb,
  AiOutlineUser,
  AiOutlineTeam,
  AiOutlineIdcard,
  AiOutlineSetting,
} from "react-icons/ai";
import logo from "../../data/logo.png";
import "../../style/admin.css";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Dashboard", "1", <AiOutlinePieChart />),
  getItem("Approve Patients ", "2", <AiOutlineGroup />),
  getItem("View Patients ", "3", <AiOutlineBulb />),
  getItem("Create Doctor ", "4", <AiOutlineUser />),
  getItem("View Doctor ", "5", <AiOutlineTeam />),
  getItem("Support", "6", <AiOutlineIdcard />),
  getItem("Settings", "7", <AiOutlineSetting />),
];
const Slider = () => {
  return (
    <Sider style={{ backgroundColor: "#363740" }}>
      <div className='slider-logo'>
        <img
          src={logo}
          alt='hyagvyvvygv'
          style={{ width: "14%", marginRight: "5px" }}
        />
        <p style={{ color: "white" }}>Keko Admin</p>
      </div>
      <Menu
        // theme="light"
        defaultSelectedKeys={["1"]}
        mode='inline'
        items={items}
        style={{
          backgroundColor: "#363740",
          height: "100vh",
          color: "white",
          marginTop: "50px",
        }}
      />
    </Sider>
  );
};

export default Slider;
