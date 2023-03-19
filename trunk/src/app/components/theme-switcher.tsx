import React, { useContext } from "react";
import { ThemeContext } from "../context";
import StyledButton from "./styled-button";

const ThemeSwitcher = (): JSX.Element => {
  const { isLightTheme, handleChangeTheme } = useContext(ThemeContext);
  return (
    <StyledButton
      className="switch_button"
      textButton={"switch theme"}
      handleClick={handleChangeTheme}
    />
  );
};

export default ThemeSwitcher;
