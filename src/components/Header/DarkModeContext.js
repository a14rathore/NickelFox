import React, { useEffect, createContext } from "react";

export const context = createContext();

function DarkModeContext(props) {
    const [darkmode, setDarkmode] = React.useState(
        localStorage.getItem('mode')
            ? JSON.parse(localStorage.getItem('mode'))
            : false)
    useEffect(() => {
        JSON.parse(localStorage.getItem('mode')) ? document.body.style.backgroundColor = '#8c6b94' : document.body.style.backgroundColor = 'white'
    })
    return (
        <context.Provider value={{ darkmode, setDarkmode }}>
            {props.children}
        </context.Provider>
    )
}

export default DarkModeContext
