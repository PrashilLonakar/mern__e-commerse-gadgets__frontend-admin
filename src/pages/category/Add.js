import React from "react";
import CustomInput from "../../components/common/CustomInput";

const Add = () => {
  return (
    <div>
      <h3 className="mb-4">Add Category</h3>
      <div>
        <form action="">
          <CustomInput
            type="text"
            name="category"
            label="Enter Category"
            placeholder="Enter Category"
            id="category"
          />
          <div className="text-start mb-3">
            <button
              className="btn btn-success border-0 rounded-3 my-5"
              type="submit"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
