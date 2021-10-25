import React, { useState } from "react";

type IInputCosts = {
  handleClick : (inputValue : number) => void
}

const InputCosts = (props : IInputCosts) => {
  const [inputValue, setValue] = useState<string>();
  return (
    <div className="block-input">
      <label>
        <input
          type="number"
          placeholder="введи расходы..."
          value={inputValue}
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </label>
      <button
        onClick={() => {
          props.handleClick(parseFloat(inputValue));
          setValue('');
        }}
      >
        click
      </button>
    </div>
  );
};

export default InputCosts;
