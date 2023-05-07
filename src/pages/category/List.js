import React, { useEffect } from "react";
import type { ColumnsType } from "antd/es/table";
import Listing from "../../components/common/Listing";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../features/category/categorySlice";
import { MdEdit, MdOutlineDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const List = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: "SNo",
      dataIndex: "sno",
    },
    {
      title: "Title",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.title - b.title,
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

  const data1 = [
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
    dispatch(getCategories());
  }, []);

  const categoryState = useSelector((state) => {
    console.log("state", state);
    return state.category.categories;
  });
  console.log("categoryState", categoryState);
  let data;
  if (categoryState) {
    data = categoryState.map((item, index) => ({
      ...item,
      key: item._id,
      sno: index + 1,
      title: Capitalize(item.title),
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
      updatedAt: convertDate(item.updatedAt),
    }));
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
        <Listing header={"Categories"} columns={columns} data={data} />
      </div>
    </>
  );
};

export default List;
