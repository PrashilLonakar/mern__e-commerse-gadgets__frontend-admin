import React from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data1: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const Dashboard = () => {
  const data = [
    {
      type: "Jan",
      sales: 38,
    },
    {
      type: "Feb",
      sales: 52,
    },
    {
      type: "March",
      sales: 61,
    },
    {
      type: "April",
      sales: 145,
    },
    {
      type: "May",
      sales: 48,
    },
    {
      type: "June",
      sales: 38,
    },
    {
      type: "July",
      sales: 38,
    },
    {
      type: "Aug",
      sales: 38,
    },
    {
      type: "Sep",
      sales: 48,
    },
    {
      type: "Oct",
      sales: 29,
    },
    {
      type: "Nov",
      sales: 18,
    },
    {
      type: "Dec",
      sales: 50,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "Income",
      },
    },
  };
  return (
    <>
      <div>
        <h3 className="mb-4">Dashboard</h3>
        <div className="d-flex justify-content-between align-items-center gap-3">
          <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
            <div>
              <p>Total</p>
              <h4 className="mb-0">$100</h4>
            </div>
            <div>
              <h6 className="green">
                <BsArrowUpRight style={{ fontSize: "12px" }} />
                32%
              </h6>
              <p className="mb-0">Compare To April 2022</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
            <div>
              <p>Total</p>
              <h4 className="mb-0">$100</h4>
            </div>
            <div>
              <h6 className="red">
                <BsArrowDownRight style={{ fontSize: "12px" }} /> 32%
              </h6>
              <p className="mb-0">Compare To April 2022</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
            <div>
              <p>Total</p>
              <h4 className="mb-0">$100</h4>
            </div>
            <div>
              <h6 className="green">
                <BsArrowUpRight style={{ fontSize: "12px" }} /> 32%
              </h6>
              <p className="mb-0">Compare To April 2022</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="mb-4">Income Statics</h3>
          <div>
            <Column {...config} />
          </div>
        </div>
        <div className="mt-4">
          <h3 className="mt-4">Recent Orders</h3>
          <div>{/* <table columns={columns} dataSource={data1} /> */}</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
