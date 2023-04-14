import React from "react";
import CustomInput from "../../components/common/CustomInput";

const Add = () => {
  return (
    <div>
      <h3 className="mb-4">Add Color</h3>
      <div>
        <form action="">
          <CustomInput
            type="color"
            label="Enter Color"
            name="color"
            placeholder="Enter Color"
            id="color"
          />
          <div className="text-start mb-3">
            <button
              className="btn btn-success border-0 rounded-3 my-5"
              type="submit"
            >
              Add Color
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
