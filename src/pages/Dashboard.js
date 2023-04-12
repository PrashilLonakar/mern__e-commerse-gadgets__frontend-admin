import React from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import type { ColumnsType } from "antd/es/table";
import Listing from "../components/common/Listing";

interface DataType {
  key: React.Key;
  sno: string;
  name: string;
  product: string;
  status: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "SNo",
    dataIndex: "sno",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];
const data1: DataType[] = [
  {
    key: "1",
    sno: "1",
    name: "John Brown",
    product: "Mobile Phone",
    status: "Pending",
  },
  {
    key: "2",
    sno: "2",
    name: "Jim Green",
    product: "Watch",
    status: "Completed",
  },
  {
    key: "3",
    sno: "3",
    name: "Joe Black",
    product: "Mobile Phone",
    status: "Hold",
  },
  {
    key: "4",
    sno: "4",
    name: "Disabled User",
    product: "earbuds",
    status: "Hold",
  },
];
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
  const tableHeader = "Recent Orders";
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
          <Listing header={tableHeader} columns={columns} data={data1} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
