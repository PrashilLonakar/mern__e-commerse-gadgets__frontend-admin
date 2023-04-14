import React, { useState } from "react";
import CustomInput from "../../components/common/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const Add = () => {
  const [quillValue, setQuillValue] = useState("");
  const handleDesc = (e) => {
    console.log(e);
  };
  const selectData = [
    {
      name: "hii",
      val: "hii",
    },
    {
      name: "hello",
      val: "hello",
    },
  ];

  return (
    <div>
      <h3 className="mb-4">Add Product</h3>
      <div>
        <form action="">
          <CustomInput
            type="text"
            label="Enter Product Title"
            name="Product"
            placeholder="Enter Product Title"
            id="product"
          />
          <ReactQuill
            theme="snow"
            value={quillValue}
            onChange={(evt) => handleDesc(evt)}
          />
          <CustomInput
            type="text"
            label="Enter Product Price"
            name="productPrice"
            placeholder="Enter Product Price"
            id="productPrice"
            i_class="my-3"
          />
          <CustomInput
            type="select"
            label="Brand"
            id="brand-select"
            name="brand"
            data={selectData}
            i_class="form-select py-3 my-3"
          />
          <CustomInput
            type="select"
            label="Category"
            id="category-select"
            name="category"
            data={selectData}
            i_class="form-select py-3 my-3"
          />
          <CustomInput
            type="select"
            label="Color"
            id="color-select"
            name="color"
            data={selectData}
            i_class="form-select py-3 my-3"
          />
          <CustomInput
            type="text"
            label="Enter Quantity"
            name="quantity"
            placeholder="Enter Quantity"
            id="quantity"
          />
          <div className="my-4">
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from
                uploading company data or other banned files.
              </p>
            </Dragger>
          </div>
          <div className="text-start mb-3">
            <button
              className="btn btn-success border-0 rounded-3 my-5"
              type="submit"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
