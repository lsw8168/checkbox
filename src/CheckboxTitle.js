import React from "react";

const CheckboxTitle = ({ type, name = "선택", onChange, selected, rows }) => {
  return (
    <label>
      <input
        type={type}
        onChange={onChange}
        ref={inputBox => {
          if (inputBox) {
            inputBox.checked = selected.length === rows.length;
            inputBox.indeterminate =
              selected.length > 0 && selected.length < rows.length;
          }
        }}
      />
      {name}
    </label>
  );
};

export default CheckboxTitle;
