import React, { useEffect } from "react";
import type { ColumnsType } from "antd/es/table";
import Listing from "../components/common/Listing";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/auth/authSlice";

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
      dataIndex: "created",
      defaultSortOrder: "descend",
      sorter: (a, b) => new Date(a.created) - new Date(b.created),
    },
    {
      title: "Order Status",
      dataIndex: "orderStatus",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const orderState = useSelector((state) => {
    console.log("state", state);
    return [state.auth.orders];
  });
  let data;
  console.log("orderState", orderState);
  if (orderState[0].products) {
    data = orderState.map((item, index) => ({
      ...item,
      key: item._id,
      // item.products.map((subItem, subIndex) => subItem._id),
      sno: index + 1,
      title: item.products.map((subItem, subIndex) => {
        return (
          <>
            <ul className="list-style-none">
              <li key={subItem._id}>{subItem.product.title}</li>
            </ul>
          </>
        );
      }),
      brand: item.products.map((subItem, subIndex) => {
        return (
          <ul className="list-style-none">
            <li key={subItem._id}>{subItem.product.brand}</li>
          </ul>
        );
      }),
      category: item.products.map((subItem, subIndex) => {
        return (
          <>
            <ul className="list-style-none">
              <li key={subItem._id}>{subItem.product.category}</li>
            </ul>
          </>
        );
      }),
      color: item.products.map((subItem, subIndex) => {
        return (
          <>
            <ul className="list-style-none">
              <li key={subItem._id}>{subItem.color}</li>
            </ul>
          </>
        );
      }),
      count: item.products.map((subItem, subIndex) => {
        return (
          <>
            <ul className="list-style-none">
              <li key={subItem._id}>{subItem.count}</li>
            </ul>
          </>
        );
      }),
      created: convertDate(item.paymentIntent.created),
      orderStatus: item.orderStatus,
      amount: "$ " + item.paymentIntent.amount,
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
