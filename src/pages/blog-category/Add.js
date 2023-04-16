import React from "react";
import CustomInput from "../../components/common/CustomInput";

const Add = () => {
  return (
    <div>
      <h3 className="mb-4 title">Add Blog-Category</h3>
      <div>
        <form action="">
          <CustomInput
            type="text"
            name="blog-category"
            label="Enter Blog-Category"
            placeholder="Enter Blog-Category"
            id="blog-category"
          />
          <div className="text-start mb-3">
            <button
              className="btn btn-success border-0 rounded-3 my-5"
              type="submit"
            >
              Add Blog-Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
