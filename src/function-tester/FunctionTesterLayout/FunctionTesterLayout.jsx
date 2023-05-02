import { Layout } from "antd";

const { Header, Content } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#9f70e0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2rem",
  fontWeight: "bold",
};

export function FunctionTesterLayout({ children }) {
  return (
    <Layout>
      <Header style={headerStyle}>Function Tester</Header>
      <Content>{children}</Content>
    </Layout>
  );
}
