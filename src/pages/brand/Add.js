import React from "react";
import CustomInput from "../../components/common/CustomInput";

const Add = () => {
  return (
    <div>
      <h3 className="mb-4">Add Brand</h3>
      <div>
        <form action="">
          <CustomInput
            type="text"
            name="brand"
            label="Enter Brand"
            placeholder="Enter Brand"
            id="brand"
          />
          <div className="text-start mb-3">
            <button
              className="btn btn-success border-0 rounded-3 my-5"
              type="submit"
            >
              Add Brand
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
