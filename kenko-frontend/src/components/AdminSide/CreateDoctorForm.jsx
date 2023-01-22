import { useState } from "react";
import { Button } from "antd";
const CreateDoctorForm = () => {
  const [show, setShow] = useState(false);
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const handleChange = () => {
    setShow(true);
  };
  return (
    <div>
      <div
        style={{
          border: "2px solid black",
          width: "50%",
          margin: "auto",
          padding: "30px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "35px", fontWeight: "600" }}>Create Doctor</h1>
        </div>
        <div style={{ marginTop: "40px" }}>
          <p style={{ fontSize: "16px" }}>First Name</p>
          <input
            type="text"
            style={{ border: "1px solid black", width: "100%", height: "25px" }}
            value={fname}
            onChange={(e) => {
              setFname(e.target.value);
            }}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <p style={{ fontSize: "16px" }}>Last Name</p>
          <input
            type="text"
            value={lname}
            style={{ border: "1px solid black", width: "100%", height: "25px" }}
            onChange={(e) => {
              setLname(e.target.value);
            }}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <p style={{ fontSize: "16px" }}>Specility</p>
          <select
            type="text"
            style={{ border: "1px solid black", width: "100%", height: "25px" }}
          >
            <option value="Neurology">Neurology</option>
            <option value="CardioLogy">CardioLogy</option>
            <option value="Dentist">Dentist</option>
            <option value="Orthopedics">Orthopedics</option>
          </select>
        </div>
        <div>
          <Button
            style={{
              backgroundColor: "lightgreen",
              marginTop: "20px",
              width: "250px",
              height: "40px",
            }}
            onClick={handleChange}
          >
            Generate Credentials
          </Button>
        </div>
        {show && (
          <div
            style={{
              maxWidth: "400px",
              backgroundColor: "darkseagreen",
              marginTop: "20px",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <p>
              username : Doc.{fname}-{lname}25
            </p>
            <p>password : gajhdnfkhj</p>
          </div>
        )}
        {show && (
          <p style={{ color: "#5F0404", fontSize: "16px" }}>
            Credential generated Successfully!
          </p>
        )}
        <div>
          <Button
            style={{
              width: "30%",
              marginLeft: "70%",
              height: "40px",
              backgroundColor: "#3347B2",
              color: "white",
            }}
          >
            Create Doctor
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateDoctorForm;
