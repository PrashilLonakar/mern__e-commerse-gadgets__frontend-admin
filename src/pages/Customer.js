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
      defaultSortOrder: "descend",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.mobile - b.mobile,
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const customerState = useSelector((state) => {
    console.log("state", state);
    return state.customer.customers;
  });
  let data;
  if (customerState) {
    data = customerState
      .filter((item) => {
        return item.role !== "admin";
      })
      .map((item, index) => ({
        ...item,
        sno: index + 1,
        name: Capitalize(item.firstname) + " " + Capitalize(item.lastname),
      }));
    console.log("data product", data);
  }

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      <div className="mb-4">
        <Listing header={"Customers"} columns={columns} data={data} />
      </div>
    </>
  );
};

export default Customer;
