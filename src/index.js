import React from "react";
import ReactDOM from "react-dom";

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
  const [selected, setSelected] = React.useState([]);

  const isSelected = name => selected.indexOf(name) !== -1;

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
    <>
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
        <div>
          <label>
            <input
              type="checkbox"
              id="checkall"
              onChange={handleSelectAllClick}
              ref={input => {
                if (input) {
                  input.checked = selected.length === rows.length;
                  input.indeterminate =
                    selected.length > 0 && selected.length < rows.length;
                }
              }}
            />
            선택
          </label>
        </div>
        <ul>
          {rows.map((row, index) => {
            const isItemSelected = isSelected(row.name);
            const labelId = `checkbox-${index}`;
            return (
              <li key={labelId}>
                <label>
                  <input
                    type="checkbox"
                    checked={isItemSelected}
                    onChange={event => handleClick(event, row.name)}
                    key={row.name}
                  />
                  {row.name}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
