import React, { useState } from "react";
import {StyledButton} from  './StyledButton'

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
      <StyledButton
        handleClick={() => {
          props.handleClick(parseFloat(inputValue));
          setValue('');
        }}
        textButton = {'click'}
      />
    </div>
  );
};

export default InputCosts;
