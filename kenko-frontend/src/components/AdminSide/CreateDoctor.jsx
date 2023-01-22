import Slider from "./Slider";
import Header from "./Header";
// import PatientList from "./PatientList";
import CreateDoctorForm from "./CreateDoctorForm";
import { Layout } from "antd";
const { Content } = Layout;
const CreateDoctor = () => {
  return (
    <Layout>
      <Slider />
      <Layout>
        <Header message={"Create Doctor"} />
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
            <CreateDoctorForm />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default CreateDoctor;
