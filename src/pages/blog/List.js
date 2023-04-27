import React, { useEffect } from "react";
import type { ColumnsType } from "antd/es/table";
import Listing from "../../components/common/Listing";

import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../features/blog/blogSlice";
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
      sorter: (a, b) => a.title.length - b.title.length,
    },
    {
      title: "Category",
      dataIndex: "category",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: "Author",
      dataIndex: "author",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.author.length - b.author.length,
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
    dispatch(getBlogs());
  }, []);

  const blogState = useSelector((state) => {
    console.log("state", state);
    return state.blog.blogs;
  });
  let data;
  if (blogState) {
    console.log("blogState", blogState);
    data = blogState.map((item, index) => ({
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
        <Listing key="1" header={"Blogs"} columns={columns} data={data} />
      </div>
    </>
  );
};

export default List;
