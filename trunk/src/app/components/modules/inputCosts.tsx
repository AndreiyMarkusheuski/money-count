import React, { useState, useReducer, useEffect } from "react";
import {StyledButton} from  './StyledButton';
import StyledInput from './StyledInput'
import initState from '../../reducer/initState';
import reducer from '../../reducer/reducer'

type IInputCosts = {
  handleClick : (inputValue : number) => void
}

const InputCosts = (props : IInputCosts) => {
  const [inputValue, setValue] = useState<string>('');
  const [{count}, dispatch] = useReducer(reducer, initState)

  return (
    <>
    <div className="block-input">
      <StyledInput
        typeInput={'number'}
        placeholder={"введи расходы..."}
        valueInput={inputValue}
        handleChange = {(e: any) => setValue(e.target.value)}
        />
      <StyledButton
        handleClick={() => {
          props.handleClick(parseFloat(inputValue));
          dispatch({type: 'increment'})
          setValue('');
        }}
        textButton = {'OK'}
      />
    </div>

    <p>Количество введенных затрат: {count}</p>
    </>
  );
};

export default InputCosts;
