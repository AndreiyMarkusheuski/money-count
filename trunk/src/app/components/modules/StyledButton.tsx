import React from "react";

type TButton = {
    onHandleClick: () => void,
    textButton: string
}

export const StyledButton = ({ onHandleClick, textButton }: TButton): JSX.Element => {
    return <button onClick={() => onHandleClick()}>
        {textButton}
    </button>
}
