import React from "react";

const CustomInput = (props) => {
  const { name, type, label, placeholder, i_id, i_class } = props;
  return (
    <div>
      {props.type === "text" ||
      props.type === "number" ||
      props.type === "email" ||
      props.type === "password" ||
      props.type === "color" ? (
        <div className="form-floating mb-3">
          <input
            type={type}
            className={`form-control ${i_class}`}
            name={name}
            id={i_id}
            placeholder={placeholder}
          />
          <label htmlFor={placeholder}>{placeholder}</label>
        </div>
      ) : props.type === "select" ? (
        <div className="form-floating mb-3">
          <select
            id={i_id}
            name={name}
            className={`form-control ${i_class}`}
            aria-label="Default select example"
          >
            <option value="">Select {label}</option>
            {props.data.map((value, index) => {
              return (
                <option key={index} value={value.val}>
                  {value.name}
                </option>
              );
            })}
          </select>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomInput;
