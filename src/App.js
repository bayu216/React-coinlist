import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Layout, Breadcrumb } from "antd";

import Topnav from "./component/Topnav";
import TabelCoin from "./component/TabelCoin";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header style={{ background: "#ffffff" }}>
          <Topnav />
        </Header>
        <div style={{ background: "#F3F7FB", marginBottom: "10px" }}>
          <Breadcrumb style={{ marginLeft: "140px", marginTop: "10px" }}>
            <Breadcrumb.Item style={{ color: "#ACBCCF" }}>
              Coin List
            </Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ background: "#F3F7FB" }}>
            <div
              style={{
                height: "510px",
                marginLeft: "60px",
                background: "#F3F7FB",
                marginTop: "10px",
              }}
            >
              <TabelCoin />
            </div>
          </Content>
        </div>
        <Footer
          style={{
            display: "flex",
            background: "#1D4279",
            position: "fixed",
            bottom: "0px",
            width: "100%",
            justifyContent: "center",
            color: "#ffffff",
            height: "20px",
          }}
        >
          [Fauzi Bayu Saputra]
        </Footer>
      </Layout>
    </>
  );
}

export default App;
