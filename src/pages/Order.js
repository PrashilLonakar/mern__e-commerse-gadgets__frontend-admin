import React, { useEffect } from "react";
import type { ColumnsType } from "antd/es/table";
import Listing from "../components/common/Listing";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/order/orderSlice";

// interface DataType {
//   key: React.Key;
//   sno: string;
//   name: string;
//   product: string;
//   status: string;
// }

const Order = () => {
  const columns = [
    {
      title: "SNo",
      dataIndex: "sno",
    },
    {
      title: "Product Name",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.product.length - b.product.length,
    },
    {
      title: "Brand",
      dataIndex: "brand",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.brand.length - b.brand.length,
    },
    {
      title: "Category",
      dataIndex: "category",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: "Color",
      dataIndex: "color",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.color.length - b.color.length,
    },
    {
      title: "Count",
      dataIndex: "count",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.count - b.count,
    },
    {
      title: "Date",
      dataIndex: "updatedAt",
      defaultSortOrder: "descend",
      sorter: (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt),
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const orderState = useSelector((state) => {
    console.log("state", state);
    return state.order.orders;
  });
  let data;
  if (orderState.products) {
    data = orderState.products.map((item, index) => ({
      ...item,
      sno: index + 1,
      title: item.product.title,
      brand: item.product.brand,
      category: item.product.category,
      updatedAt: convertDate(item.product.updatedAt),
    }));
    console.log("data product", data);
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
        <Listing header={"Orders"} columns={columns} data={data} />
      </div>
    </>
  );
};

export default Order;
