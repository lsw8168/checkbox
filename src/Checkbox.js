import React from "react";

const Checkbox = ({
  type = "checkbox",
  checked = false,
  onChange,
  label,
  name
}) => (
  <>
    <label>
      <input type={type} name={name} checked={checked} onChange={onChange} />
      {label}
    </label>
  </>
);

export default Checkbox;
