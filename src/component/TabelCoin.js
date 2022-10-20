import { Space, Table, Tag, Select, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";

function TabelCoin() {
  const [getCoins, setGetCoins] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coinpaprika.com/v1/coins/")
      .then((res) => {
        setGetCoins(res.data.slice(0, 99));
        console.log(res.data.slice(0, 99));
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const { Option } = Select;

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
    },
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Active",
      dataIndex: "is_active",
      key: "active",
      render: (text) => <p>{text ? "True" : "False"}</p>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        // <Space size="middle">
        //   <a>Delete</a>
        // </Space>
        <Button type="danger">Delete</Button>
      ),
    },
  ];

  //select
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <div
        className="shadowbox"
        style={{
          width: "1000px",
          marginLeft: "70px",
          background: "#ffffff",
          borderRadius: 10,
        }}
      >
        <div
          style={{ paddingTop: "5px", marginTop: "0px", marginLeft: "40px" }}
        >
          <h3 style={{ color: "#2569A5" }}>Coin List</h3>
          {/* Select */}
          <Select
            defaultValue="Select"
            style={{
              width: 180,
              marginRight: 10,
            }}
            onChange={handleChange}
          >
            <Option value="select">Select</Option>
            <Option value="id">ID</Option>
            <Option value="name">Name</Option>
          </Select>
          {/* Search */}
          <Input
            style={{ width: 250, marginRight: 5 }}
            placeholder="Search"
            prefix={<SearchOutlined />}
          />
          {/* Button */}
          <Button style={{ background: "#2569A5", color: "#ffffff" }}>
            Search
          </Button>
        </div>
        <div
          style={{
            width: "900px",
            marginLeft: "40px",
            marginTop: "10px",
          }}
        >
          <Table
            columns={columns}
            dataSource={getCoins}
            pagination={{ pageSize: 4 }}
          />
        </div>
      </div>
    </>
  );
}

export default TabelCoin;
