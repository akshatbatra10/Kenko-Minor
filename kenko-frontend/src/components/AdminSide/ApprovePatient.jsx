import Slider from "./Slider";
import Header from "./Header";
import PatientList from "./PatientList";
import { Layout } from "antd";
const { Content } = Layout;
const ApprovePatient = () => {
  return (
    <Layout>
      <Slider />
      <Layout>
        <Header message={"Patient"} />
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <PatientList />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ApprovePatient;
