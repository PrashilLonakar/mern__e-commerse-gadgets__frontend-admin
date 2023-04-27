import React, { useEffect } from "react";
import type { ColumnsType } from "antd/es/table";
import Listing from "../../components/common/Listing";

import { useDispatch, useSelector } from "react-redux";
import { getCoupons } from "../../features/coupon/couponSlice";
import { MdEdit, MdOutlineDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const List = () => {
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
      title: "Discounts",
      dataIndex: "discount",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.discount - b.discount,
    },
    {
      title: "Expiry-Date",
      dataIndex: "expiry",
      defaultSortOrder: "descend",
      sorter: (a, b) => new Date(a.expiry) - new Date(b.expiry),
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoupons());
  }, []);

  const couponState = useSelector((state) => {
    console.log("state", state);
    return state.coupon.coupons;
  });
  let data;
  if (couponState) {
    console.log("couponState", couponState);
    data = couponState.map((item, index) => ({
      ...item,
      key: item._id,
      sno: index + 1,
      name: Capitalize(item.name),
      action: (
        <>
          <Link to="add" className="text-success btn-action">
            <MdEdit />
          </Link>
          <Link className="text-danger btn-action">
            <MdOutlineDeleteForever />
          </Link>
        </>
      ),
      expiry: convertDate(item.expiry),
    }));

    console.log("data_1", data);
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
        <Listing header={"Coupons"} columns={columns} data={data} />
      </div>
    </>
  );
};

export default List;
