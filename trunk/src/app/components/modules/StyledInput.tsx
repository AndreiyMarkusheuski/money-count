import React from "react";

type Props = {
    typeInput: string,
    placeholder: string,
    valueInput: string,
    handleChange: (e: any) => void
}

const StyledInput = ({ typeInput, placeholder, valueInput, handleChange }: Props) => {
    return (
        <input
            type={typeInput}
            placeholder={placeholder}
            value={valueInput}
            onChange={handleChange}
        ></input>
    )
}

export default StyledInput;