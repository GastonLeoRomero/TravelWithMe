import React from "react";

function BuscadorItem({ data, name, value, selectHandler }) {
  return (
    <div className="select-container">
      <select
        value={value}
        onChange={selectHandler}
        className={`select ${name}`}
        name={name}
      >
        {data.map((item, index) => (
          <option value={index} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BuscadorItem;
