import React, { useEffect } from "react";
import type { ColumnsType } from "antd/es/table";
import Listing from "../components/common/Listing";
import { useDispatch, useSelector } from "react-redux";
import { getInquirys } from "../features/inquiry/inquirySlice";

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
      title: "Comment",
      dataIndex: "comment",
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInquirys());
  }, []);

  const inquiryState = useSelector((state) => {
    console.log("state", state);
    return state.inquiry.inquirys;
  });
  let data;
  if (inquiryState) {
    data = inquiryState
      .filter((item) => {
        return item.role !== "admin";
      })
      .map((item, index) => ({
        ...item,
        key: item._id,
        sno: index + 1,
        name: Capitalize(item.name),
      }));
    console.log("data inquiry", data);
  }

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      <div className="mb-4">
        <Listing header={"Inquiries"} columns={columns} data={data} />
      </div>
    </>
  );
};

export default Inquiries;
