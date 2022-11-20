import React, { useState, createContext } from 'react'
import { useEffect } from 'react';
import { useTranslation} from "react-i18next";

function ConfigContext() {
    const LangContext = createContext();

    const ThemeContext = createContext();

    const LangProvider = (props) => {
        const { t,i18n } = useTranslation();
        const [lang, setLang] = useState(localStorage.getItem('language'));

        useEffect(()=>{
            i18n.changeLanguage(lang);
        },[])

        const changeLang = e =>{ 
            localStorage.setItem('language', e.target.value)
            i18n.changeLanguage(e.target.value);
        }
        const langState = { lang, changeLang }
        return (
            <LangContext.Provider value={langState} >
                {props.children}
            </LangContext.Provider>
        )
    }

    const ThemeProvider = (props) => {
        const [theme, setTheme] = useState(localStorage.getItem('theme'))

        useEffect(()=>{
            var body = document.body;

            if (theme == 'light') {
                body.classList.remove("dark");
            }
            else {
                body.classList.add("dark");
            }
        },[])

        const changeTheme = e => {
            var body = document.body;

            setTheme(e.target.value);
            localStorage.setItem('theme', e.target.value)

            let theme = e.target.value

            if (theme == 'light') {
                body.classList.remove("dark");
            }
            else {
                body.classList.add("dark");
            }
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