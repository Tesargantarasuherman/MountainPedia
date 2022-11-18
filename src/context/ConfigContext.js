import React, { useState, createContext } from 'react'


function ConfigContext() {
    const LangContext = createContext();

    const ThemeContext = createContext();

    const LangProvider = (props) => {
        const [lang, setLang] = useState("en")

        const changeLang = e =>{
            setLang(e.target.value)
            console.log(e.target.value)
        } 
        const langState = { lang, changeLang }
        return (
            <LangContext.Provider value={langState} >
                {props.children}
            </LangContext.Provider>
        )
    }

    const ThemeProvider = (props) => {
        const [theme, setTheme] = useState("light")

        const changeTheme = e => {
            setTheme(e.target.value)
        }
        const themeState = {
            theme: theme,
            changeTheme: changeTheme
        }
        return (
            <ThemeContext.Provider value={themeState} >
                {props.children}
            </ThemeContext.Provider>
        )
    }
    return {
        LangContext, LangProvider,ThemeContext,ThemeProvider
    }
}
export default ConfigContext();