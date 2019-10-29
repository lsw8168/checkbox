import React from "react";

const Checkbox = ({ type, name, checked, onChange }) => (
  <label>
    <input type={type} checked={checked} onChange={onChange} />
    {name}
  </label>
);

export default Checkbox;
