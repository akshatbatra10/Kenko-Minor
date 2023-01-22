//import { BellOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { AiOutlineBell, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { Layout, Avatar } from "antd";
import "../../style/admin.css";
const { Header } = Layout;

const DashBoardHeader = ({ message }) => {
  // console.log({ message });
  return (
    <div>
      <Header style={{ backgroundColor: "white" }}>
        <div>
          <div className='navbar-container'>
            <div style={{ marginTop: "15px" }}>
              <h1 style={{ fontSize: "20px", fontWeight: "600" }}>{message}</h1>
            </div>
            <div>
              <div style={{ display: "flex" }}>
                <div className='navbar-margin'>
                  <AiOutlineSearch />
                </div>
                <div className='navbar-margin'>
                  <AiOutlineBell />
                </div>
                <div
                  className='navbar-margin'
                  style={{ marginTop: "10px", marginRight: "50px" }}>
                  <p style={{ fontSize: "25px" }}>|</p>
                </div>
                <div className='navbar-margin' style={{ marginTop: "25px" }}>
                  <h2 style={{ fontWeight: "600" }}>Admin</h2>
                </div>
                <div className='navbar-margin'>
                  <Avatar
                    style={{
                      backgroundColor: "#87d068",
                    }}
                    icon={<AiOutlineUser />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
};

export default DashBoardHeader;
