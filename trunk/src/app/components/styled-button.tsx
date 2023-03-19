import React from "react";

type Props = {
  className?: string;
  textButton: string;
  handleClick: () => void;
};

const StyledButton = ({
  textButton,
  handleClick,
  className = "",
}: Props): JSX.Element => {
  return (
    <button className={className} onClick={() => handleClick()}>
      {textButton}
    </button>
  );
};

export default StyledButton;
