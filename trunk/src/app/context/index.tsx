import React, { useState, useCallback } from "react";

export const ThemeContext = React.createContext(null)

export const ThemeProvider = ({ children }: any) => {
    const [darkTheme, setDarkTheme] = useState<boolean>(true);
    const handleChangeTheme = useCallback(() => {
        setDarkTheme(prevState => !prevState)
    }, [darkTheme])

    return (
        <ThemeContext.Provider value={{ darkTheme, handleChangeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}