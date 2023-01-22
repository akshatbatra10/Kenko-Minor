import React from "react";
import { Divider, Button } from "antd";
import KenkoLogo from "../../data/KenkoLogo.jpeg";
import "../../style/admin.css";
const AdminLogin = () => {
  return (
    <div>
      <div className="login-background"></div>
      <div
        style={{
          width: "50%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
          marginTop: "200px",
        }}
      >
        <div style={{ width: "50%" }}>
          <div>
            <img src={KenkoLogo} alt="myimage" />
          </div>
          <div style={{ width: "80%", margin: "auto" }}>
            <h1
              style={{
                fontSize: "35px",
                border: "1px solid black",
                padding: "10px",
              }}
            >
              ADMIN LOGIN
            </h1>
          </div>
          <div style={{ marginTop: "40px" }}>
            <input type="text" placeholder="UserName" />
          </div>
          <Divider style={{ marginTop: "10px", backgroundColor: "black" }} />
          <div>
            <input type="text" placeholder="Password" />
          </div>
          <Divider style={{ marginTop: "10px", backgroundColor: "black" }} />
          <div>
            <Button
              style={{
                backgroundColor: "#4044ED",
                color: "white",
                width: "100%",
                marginTop: "20px",
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
