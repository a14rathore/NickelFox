import React, { createContext } from "react";

export const DarkModeTheme = createContext();



function DarkModeProvider(props) {
    const [darkmode, setDarkmode] = React.useState(false)
    return (
        <DarkModeTheme.Provider value={{ darkmode, setDarkmode }}>
            {props.children}
        </DarkModeTheme.Provider>
    )
}

export const useTheme = () => React.useContext(DarkModeTheme)
export default DarkModeProvider
