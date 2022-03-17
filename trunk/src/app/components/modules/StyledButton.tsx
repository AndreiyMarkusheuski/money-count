import React from "react";

type Props = {
    textButton: string,
    handleClick: () => void
}

export const StyledButton = ({ textButton, handleClick }: Props): JSX.Element => {
    return <button
        onClick={() => handleClick()}
    >
        {textButton}
    </button>

}