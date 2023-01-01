import React, { useState, createContext } from 'react'
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";

function ConfigContext() {
    const LangContext = createContext();
    const ThemeContext = createContext();
    const AuthContext = createContext();

    const AuthProvider = (props) => {
        let token = localStorage.getItem('token');
        const [auth, setAuth] = useState(token && token != '' ? true : false);

        useEffect(() => {
        }, [])

        const authState = { auth }
        return (
            <AuthContext.Provider value={authState} >
                {props.children}
            </AuthContext.Provider>
        )
    }
    const LangProvider = (props) => {
        const { t, i18n } = useTranslation();
        const [lang, setLang] = useState(localStorage.getItem('i18nextLng'));

        useEffect(() => {
            i18n.changeLanguage(lang);
        }, [])

        const changeLang = e => {
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

        useEffect(() => {
            var body = document.body;

            if (theme == 'light') {
                body.classList.remove("dark");
            }
            else {
                body.classList.add("dark");
            }
        }, [])

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
        AuthContext, AuthProvider, LangContext, LangProvider, ThemeContext, ThemeProvider
    }
}
export default ConfigContext();