import React, { useState } from "react";
import CustomInput from "../../components/common/CustomInput";
import { Link } from "react-router-dom";
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

  const [value, setValue] = useState("");
  const handleDesc = (e) => {
    console.log(e);
  };
  return (
    <div>
      <h3 className="mb-4">Add Blog</h3>
      {/* <Stepper
        steps={[
          { label: "Add Blog Details" },
          { label: "Upload Images" },
          { label: "Finish" },
        ]}
        activeStep={1}
      /> */}
      <div>
        <form action="">
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
          <CustomInput
            type="text"
            label="Title"
            placeholder="Enter Blog Title"
            id="title"
          />
          <CustomInput
            type="select"
            label="Blog Category"
            id="blog-select"
            data={selectData}
            i_class="form-select py-3 mb-3"
          />
          <ReactQuill
            theme="snow"
            value={value}
            onChange={(evt) => handleDesc(evt)}
          />
          <div className="text-start mb-3">
            <button
              className="btn btn-success border-0 rounded-3 my-5"
              type="submit"
            >
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
