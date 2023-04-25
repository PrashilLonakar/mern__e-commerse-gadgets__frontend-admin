import React, { useEffect } from "react";
import type { ColumnsType } from "antd/es/table";
import Listing from "../components/common/Listing";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/customers/customerSlice";

interface DataType {
  key: React.Key;
  sno: string;
  name: string;
  product: string;
  status: string;
}

const Customer = () => {
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
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const customerState = useSelector((state) => state.customer.customers);
  console.log("customer", customerState);
  const data = customerState.getUsers.map((item, index) => ({
    ...item,
    sno: index + 1,
  }));
  console.log("data", data);
  return (
    <>
      <div className="mb-4">
        <Listing header={"Customers"} columns={columns} data={data} />
      </div>
    </>
  );
};

export default Customer;
