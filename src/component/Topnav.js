import { Menu } from "antd";

function Topnav() {
  return (
    <>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["mail"]}
        style={{ marginTop: "5px", color: "#8597AC", marginLeft: "65px" }}
      >
        <Menu.Item>Home</Menu.Item>
        <Menu.Item key="mail">Coin List</Menu.Item>
      </Menu>
    </>
  );
}

export default Topnav;
