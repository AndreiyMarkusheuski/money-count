import React, {useState, useCallback, useEffect} from "react";

type ThmCxt = {
    isLightTheme: boolean,
    handleChangeTheme: () => void
}

export const ThemeContext = React.createContext<ThmCxt>({
    isLightTheme: false,
    handleChangeTheme: () => {}
})

type Props = {
    children: React.ReactNode
}

export const ThemeProvider = ({children} : Props ) => {
    const [isLightTheme, setLightTheme] = useState<boolean>(false)
    const handleChangeTheme = useCallback(()=> {
        setLightTheme(prevState => !prevState)
    }, [isLightTheme])

    useEffect(()=>{
        const currentHours: number = new Date().getHours();
        setLightTheme(currentHours > 9 && currentHours < 21)
    }, [])

    return (
        <ThemeContext.Provider value={{isLightTheme, handleChangeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}