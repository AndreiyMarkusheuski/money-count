import React, { useState } from "react";

const InputCosts = (props) => {
  const [value, setValue] = useState("");
  return (
    <div className="block-input">
      <label>
        <input
          type="number"
          placeholder="введи расходы..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </label>
      <button
        onClick={() => {
          props.handleClick(value);
          setValue("");
        }}
      >
        click
      </button>
    </div>
  );
};

export default InputCosts;
