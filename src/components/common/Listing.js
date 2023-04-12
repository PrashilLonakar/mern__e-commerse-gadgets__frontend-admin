import React from "react";
import { Table } from "antd";

const Listing = (props) => {
  return (
    <>
      <div>
        <h3 className="mb-4">{props.header}</h3>
        <div>
          <Table columns={props.columns} dataSource={props.data} />
        </div>
      </div>
    </>
  );
};

export default Listing;
