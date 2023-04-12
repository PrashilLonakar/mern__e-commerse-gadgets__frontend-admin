import React from "react";
import type { ColumnsType } from "antd/es/table";
import Listing from "../components/common/Listing";

interface DataType {
  key: React.Key;
  sno: string;
  name: string;
  product: string;
  status: string;
}

const Inquiries = () => {
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
  const data: DataType[] = [
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
  const tableHeader = "Inquiries";
  return (
    <>
      <div className="mb-4">
        <Listing header={"Inquiries"} columns={columns} data={data} />
      </div>
    </>
  );
};

export default Inquiries;
