import { AiOutlineUser, AiOutlineFilter, AiOutlineMore } from "react-icons/ai";
import { BiSortDown } from "react-icons/bi";
import { Avatar, Button } from "antd";
import "../../style/admin.css";
import { Divider } from "antd";
const PatientList = () => {
  return (
    <div style={{ background: "white", borderRadius: "10px", padding: "20px" }}>
      <div className='navbar-container'>
        <div>
          <h1 style={{ fontSize: "18px", fontWeight: "600" }}>All Patients</h1>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <BiSortDown />
          </div>
          <div style={{ marginRight: "40px" }}>
            <p>Sort</p>
          </div>
          <div>
            <AiOutlineFilter />
          </div>
          <div style={{ marginRight: "20px" }}>
            <p>Filter</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", marginTop: "15px" }}>
        <div className='first-col'>
          <p>Patient Details</p>
        </div>
        <div className='second-col'>
          <p>Patient Name</p>
        </div>
        <div className='third-col'>
          <p>Date</p>
        </div>
        <div className='forth-col'>
          <p>Action</p>
        </div>
        <div style={{ flex: "0.5" }}>
          <p></p>
        </div>
      </div>
      <Divider style={{ marginTop: "10px", background: "black" }} />

      <div style={{ display: "flex", marginTop: "15px" }}>
        <div className='first-col'>
          <div style={{ display: "flex" }}>
            <div>
              <Avatar
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<AiOutlineUser />}
              />
            </div>
            <div style={{ marginLeft: "15px" }}>
              <p style={{ marginTop: "-10px" }}>Age : 55</p>
              <p style={{ marginTop: "-5px" }}>
                Address : A1/25A Budh vihar Phase-1
              </p>
              <p style={{ marginTop: "-5px" }}>Blood Group B+</p>
            </div>
          </div>
        </div>
        <div className='second-col'>
          <p>Atul Chauhan</p>
        </div>
        <div className='third-col'>
          <p>May 26, 2019</p>
        </div>
        <div className='forth-col'>
          <div style={{ marginTop: "-10px" }}>
            <Button
              style={{ backgroundColor: "lightgreen", borderRadius: "30px" }}>
              Accept
            </Button>
          </div>
          <div style={{ marginTop: "5px" }}>
            <Button
              style={{
                backgroundColor: "red",
                borderRadius: "30px",
                width: "55%",
              }}>
              Deny
            </Button>
          </div>
        </div>
        <div style={{ flex: "0.5" }}>
          <p>
            <AiOutlineMore />
          </p>
        </div>
      </div>
      <Divider style={{ marginTop: "0px", background: "black" }} />
      <div style={{ display: "flex", marginTop: "15px" }}>
        <div className='first-col'>
          <div style={{ display: "flex" }}>
            <div>
              <Avatar
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<AiOutlineUser />}
              />
            </div>
            <div style={{ marginLeft: "15px" }}>
              <p style={{ marginTop: "-10px" }}>Age : 55</p>
              <p style={{ marginTop: "-5px" }}>
                Address : A1/25A Budh vihar Phase-1
              </p>
              <p style={{ marginTop: "-5px" }}>Blood Group B+</p>
            </div>
          </div>
        </div>
        <div className='second-col'>
          <p>Atul Chauhan</p>
        </div>
        <div className='third-col'>
          <p>May 26, 2019</p>
        </div>
        <div className='forth-col'>
          <div style={{ marginTop: "-10px" }}>
            <Button
              style={{ backgroundColor: "lightgreen", borderRadius: "30px" }}>
              Accept
            </Button>
          </div>
          <div style={{ marginTop: "5px" }}>
            <Button
              style={{
                backgroundColor: "red",
                borderRadius: "30px",
                width: "55%",
              }}>
              Deny
            </Button>
          </div>
        </div>
        <div style={{ flex: "0.5" }}>
          <p>
            <AiOutlineMore />
          </p>
        </div>
      </div>
      <Divider style={{ marginTop: "0px", background: "black" }} />
      <div style={{ display: "flex", marginTop: "15px" }}>
        <div className='first-col'>
          <div style={{ display: "flex" }}>
            <div>
              <Avatar
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<AiOutlineUser />}
              />
            </div>
            <div style={{ marginLeft: "15px" }}>
              <p style={{ marginTop: "-10px" }}>Age : 55</p>
              <p style={{ marginTop: "-5px" }}>
                Address : A1/25A Budh vihar Phase-1
              </p>
              <p style={{ marginTop: "-5px" }}>Blood Group B+</p>
            </div>
          </div>
        </div>
        <div className='second-col'>
          <p>Atul Chauhan</p>
        </div>
        <div className='third-col'>
          <p>May 26, 2019</p>
        </div>
        <div className='forth-col'>
          <div style={{ marginTop: "-10px" }}>
            <Button
              style={{ backgroundColor: "lightgreen", borderRadius: "30px" }}>
              Accept
            </Button>
          </div>
          <div style={{ marginTop: "5px" }}>
            <Button
              style={{
                backgroundColor: "red",
                borderRadius: "30px",
                width: "55%",
              }}>
              Deny
            </Button>
          </div>
        </div>
        <div style={{ flex: "0.5" }}>
          <p>
            <AiOutlineMore />
          </p>
        </div>
      </div>
      <Divider style={{ marginTop: "0px", background: "black" }} />
      <div style={{ display: "flex", marginTop: "15px" }}>
        <div className='first-col'>
          <div style={{ display: "flex" }}>
            <div>
              <Avatar
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<AiOutlineUser />}
              />
            </div>
            <div style={{ marginLeft: "15px" }}>
              <p style={{ marginTop: "-10px" }}>Age : 55</p>
              <p style={{ marginTop: "-5px" }}>
                Address : A1/25A Budh vihar Phase-1
              </p>
              <p style={{ marginTop: "-5px" }}>Blood Group B+</p>
            </div>
          </div>
        </div>
        <div className='second-col'>
          <p>Atul Chauhan</p>
        </div>
        <div className='third-col'>
          <p>May 26, 2019</p>
        </div>
        <div className='forth-col'>
          <div style={{ marginTop: "-10px" }}>
            <Button
              style={{ backgroundColor: "lightgreen", borderRadius: "30px" }}>
              Accept
            </Button>
          </div>
          <div style={{ marginTop: "5px" }}>
            <Button
              style={{
                backgroundColor: "red",
                borderRadius: "30px",
                width: "55%",
              }}>
              Deny
            </Button>
          </div>
        </div>
        <div style={{ flex: "0.5" }}>
          <p>
            <AiOutlineMore />
          </p>
        </div>
      </div>
      <Divider style={{ marginTop: "0px", background: "black" }} />
      <div style={{ display: "flex", marginTop: "15px" }}>
        <div className='first-col'>
          <div style={{ display: "flex" }}>
            <div>
              <Avatar
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<AiOutlineUser />}
              />
            </div>
            <div style={{ marginLeft: "15px" }}>
              <p style={{ marginTop: "-10px" }}>Age : 55</p>
              <p style={{ marginTop: "-5px" }}>
                Address : A1/25A Budh vihar Phase-1
              </p>
              <p style={{ marginTop: "-5px" }}>Blood Group B+</p>
            </div>
          </div>
        </div>
        <div className='second-col'>
          <p>Atul Chauhan</p>
        </div>
        <div className='third-col'>
          <p>May 26, 2019</p>
        </div>
        <div className='forth-col'>
          <div style={{ marginTop: "-10px" }}>
            <Button
              style={{ backgroundColor: "lightgreen", borderRadius: "30px" }}>
              Accept
            </Button>
          </div>
          <div style={{ marginTop: "5px" }}>
            <Button
              style={{
                backgroundColor: "red",
                borderRadius: "30px",
                width: "55%",
              }}>
              Deny
            </Button>
          </div>
        </div>
        <div style={{ flex: "0.5" }}>
          <p>
            <AiOutlineMore />
          </p>
        </div>
      </div>
      <Divider style={{ marginTop: "0px", background: "black" }} />
      <div style={{ display: "flex", marginTop: "15px" }}>
        <div className='first-col'>
          <div style={{ display: "flex" }}>
            <div>
              <Avatar
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<AiOutlineUser />}
              />
            </div>
            <div style={{ marginLeft: "15px" }}>
              <p style={{ marginTop: "-10px" }}>Age : 55</p>
              <p style={{ marginTop: "-5px" }}>
                Address : A1/25A Budh vihar Phase-1
              </p>
              <p style={{ marginTop: "-5px" }}>Blood Group B+</p>
            </div>
          </div>
        </div>
        <div className='second-col'>
          <p>Atul Chauhan</p>
        </div>
        <div className='third-col'>
          <p>May 26, 2019</p>
        </div>
        <div className='forth-col'>
          <div style={{ marginTop: "-10px" }}>
            <Button
              style={{ backgroundColor: "lightgreen", borderRadius: "30px" }}>
              Accept
            </Button>
          </div>
          <div style={{ marginTop: "5px" }}>
            <Button
              style={{
                backgroundColor: "red",
                borderRadius: "30px",
                width: "55%",
              }}>
              Deny
            </Button>
          </div>
        </div>
        <div style={{ flex: "0.5" }}>
          <p>
            <AiOutlineMore />
          </p>
        </div>
      </div>
      <Divider style={{ marginTop: "0px", background: "black" }} />
      <div style={{ display: "flex", marginTop: "15px" }}>
        <div className='first-col'>
          <div style={{ display: "flex" }}>
            <div>
              <Avatar
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<AiOutlineUser />}
              />
            </div>
            <div style={{ marginLeft: "15px" }}>
              <p style={{ marginTop: "-10px" }}>Age : 55</p>
              <p style={{ marginTop: "-5px" }}>
                Address : A1/25A Budh vihar Phase-1
              </p>
              <p style={{ marginTop: "-5px" }}>Blood Group B+</p>
            </div>
          </div>
        </div>
        <div className='second-col'>
          <p>Atul Chauhan</p>
        </div>
        <div className='third-col'>
          <p>May 26, 2019</p>
        </div>
        <div className='forth-col'>
          <div style={{ marginTop: "-10px" }}>
            <Button
              style={{ backgroundColor: "lightgreen", borderRadius: "30px" }}>
              Accept
            </Button>
          </div>
          <div style={{ marginTop: "5px" }}>
            <Button
              style={{
                backgroundColor: "red",
                borderRadius: "30px",
                width: "55%",
              }}>
              Deny
            </Button>
          </div>
        </div>
        <div style={{ flex: "0.5" }}>
          <p>
            <AiOutlineMore />
          </p>
        </div>
      </div>
      <Divider style={{ marginTop: "0px", background: "black" }} />
      <div style={{ display: "flex", marginTop: "15px" }}>
        <div className='first-col'>
          <div style={{ display: "flex" }}>
            <div>
              <Avatar
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<AiOutlineUser />}
              />
            </div>
            <div style={{ marginLeft: "15px" }}>
              <p style={{ marginTop: "-10px" }}>Age : 55</p>
              <p style={{ marginTop: "-5px" }}>
                Address : A1/25A Budh vihar Phase-1
              </p>
              <p style={{ marginTop: "-5px" }}>Blood Group B+</p>
            </div>
          </div>
        </div>
        <div className='second-col'>
          <p>Atul Chauhan</p>
        </div>
        <div className='third-col'>
          <p>May 26, 2019</p>
        </div>
        <div className='forth-col'>
          <div style={{ marginTop: "-10px" }}>
            <Button
              style={{ backgroundColor: "lightgreen", borderRadius: "30px" }}>
              Accept
            </Button>
          </div>
          <div style={{ marginTop: "5px" }}>
            <Button
              style={{
                backgroundColor: "red",
                borderRadius: "30px",
                width: "55%",
              }}>
              Deny
            </Button>
          </div>
        </div>
        <div style={{ flex: "0.5" }}>
          <AiOutlineMore />
        </div>
      </div>
      <Divider style={{ marginTop: "0px", background: "black" }} />
      <div style={{ display: "flex", marginTop: "15px" }}>
        <div className='first-col'>
          <div style={{ display: "flex" }}>
            <div>
              <Avatar
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<AiOutlineUser />}
              />
            </div>
            <div style={{ marginLeft: "15px" }}>
              <p style={{ marginTop: "-10px" }}>Age : 55</p>
              <p style={{ marginTop: "-5px" }}>
                Address : A1/25A Budh vihar Phase-1
              </p>
              <p style={{ marginTop: "-5px" }}>Blood Group B+</p>
            </div>
          </div>
        </div>
        <div className='second-col'>
          <p>Atul Chauhan</p>
        </div>
        <div className='third-col'>
          <p>May 26, 2019</p>
        </div>
        <div className='forth-col'>
          <div style={{ marginTop: "-10px" }}>
            <Button
              style={{ backgroundColor: "lightgreen", borderRadius: "30px" }}>
              Accept
            </Button>
          </div>
          <div style={{ marginTop: "5px" }}>
            <Button
              style={{
                backgroundColor: "red",
                borderRadius: "30px",
                width: "55%",
              }}>
              Deny
            </Button>
          </div>
        </div>
        <div style={{ flex: "0.5" }}>
          <p>
            <AiOutlineMore />
          </p>
        </div>
      </div>
      <Divider style={{ marginTop: "0px", background: "black" }} />
    </div>
  );
};

export default PatientList;
