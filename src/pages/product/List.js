import React, { useEffect } from "react";
import type { ColumnsType } from "antd/es/table";
import Listing from "../../components/common/Listing";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/product/productSlice";
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
      title: "Brand",
      dataIndex: "brand",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.brand.length - b.brand.length,
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "rating",
      dataIndex: "totalrating",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.totalrating - b.totalrating,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.quantity - b.quantity,
    },
    {
      title: "Per Price",
      dataIndex: "price",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productState = useSelector((state) => state.product.products);
  console.log("productState", productState);
  let data;
  if (productState) {
    data = productState.map((item, index) => ({
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
    }));
  }

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <>
      <div className="mb-4">
        <Listing header={"Products"} columns={columns} data={data} />
      </div>
    </>
  );
};

export default List;
