import React, {useContext} from "react";
import { ThemeContext } from "../../context";
import { StyledButton } from "./StyledButton";


export const ThemeSwitcher = () : JSX.Element => {
    const {isLightTheme, handleChangeTheme} = useContext(ThemeContext);
    return <StyledButton textButton={'switch theme'} handleClick={handleChangeTheme}/>
}