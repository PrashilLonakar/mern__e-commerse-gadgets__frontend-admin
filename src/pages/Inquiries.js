import React, { useEffect } from "react";
import type { ColumnsType } from "antd/es/table";
import Listing from "../components/common/Listing";
import { useDispatch, useSelector } from "react-redux";
import { getInquirys } from "../features/inquiry/inquirySlice";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const Inquiries = () => {
  const columns = [
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
    {
      title: "Date",
      dataIndex: "updatedAt",
      defaultSortOrder: "descend",
      sorter: (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt),
    },
    {
      title: "Action",
      dataIndex: "action",
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
        action: (
          <>
            <Link className="text-danger btn-action">
              <MdOutlineDeleteForever />
            </Link>
          </>
        ),
        expiry: convertDate(item.expiry),
      }));
    console.log("data inquiry", data);
  }

  function convertDate(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
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
