import React, { useState } from "react";
import ReactDOM from "react-dom";
import CheckboxTitle from "./CheckboxTitle";
import Checkbox from "./Checkbox";

import "./styles.css";

const rows = [
  {
    name: "Cupcake"
  },
  {
    name: "Donut"
  },
  {
    name: "Eclair"
  },
  {
    name: "Coffee"
  }
];

const App = () => {
  const [selected, setSelected] = useState([]);
  const isSelected = name => {
    return selected.indexOf(name) !== -1;
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  return (
    <div>
      <div>
        checkbox length: {rows.length}
        <br />
        checked: {selected.length}
        <br />
        indeterminate:{" "}
        {selected.length > 0 && selected.length < rows.length
          ? "true"
          : "false"}
        <br />
        <br />
      </div>

      <CheckboxTitle
        type="checkbox"
        onChange={handleSelectAllClick}
        selected={selected}
        rows={rows}
      />

      {rows.map((row, index) => {
        const isItemSelected = isSelected(row.name);
        return (
          <Checkbox
            key={index}
            type="checkbox"
            name={row.name}
            checked={isItemSelected}
            onChange={event => handleClick(event, row.name)}
          />
        );
      })}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
