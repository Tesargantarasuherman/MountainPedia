import React from 'react'
import { useState } from 'react'
import './index.scss'
import { useTranslation} from "react-i18next";
import { useEffect } from 'react';
import { useContext } from 'react';
import ConfigContext from '../../../context/ConfigContext';


const {LangContext,ThemeContext} = ConfigContext;

export default function Footer() {
    const props_language = useContext(LangContext)
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('en');
    const { t,i18n } = useTranslation();

    const renderOptionTheme = () => {
        if (theme == 'dark') {
            return (
                <label className="switch">
                    <input type="checkbox" onClick={() => setTheme('light')} checked />
                    <span className="slider round"></span>
                </label>
            )
        }
        else {
            return (
                <label className="switch">
                    <input type="checkbox" onClick={() => setTheme('dark')} />
                    <span className="slider round"></span>
                </label>
            )
        }
    }
    const actionSetTheme = (e) => {
        localStorage.setItem('theme', e.target.value)
        _actionSetTheme()
    }
    const _actionSetTheme = () => {
        var body = document.body;
        let theme = localStorage.getItem('theme')
        if (theme == 'light') {
            body.classList.remove("dark");
        }
        else {
            body.classList.add("dark");
        }
    }
    useEffect(()=>{
        initialLanguage(LangContext.lang);
        console.log(props_language,'change')
    },[])

    const initialLanguage =()=>{
        let language = localStorage.getItem('language')
        i18n.changeLanguage(language);
    }

    const actionSetLanguage =(e)=>{
        localStorage.setItem('language', e.target.value)
        initialLanguage();

    }
    return (
        <div className='footer'>
            <div className="container-content">
                <div className="content">
                    <label> Language</label>
                    <select name="" id="" onChange={props_language.changeLang}>
                        <option value="id">Indonesia</option>
                        <option value="en">English(United States)</option>
                    </select>
                    <label> Theme</label>
                    <select name="" id="" onChange={actionSetTheme}>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                    {/* {renderOptionTheme()} */}
                </div>
                <div className="content">
                    <label> {t('Navbar.1')}</label>
                    <p>About Me</p>
                    <p>About Me</p>
                    <p>About Me</p>
                </div>
                <div className="content">
                    <label>Support</label>
                    <p>About Me</p>
                    <p>About Me</p>
                    <p>About Me</p>
                </div>
                <div className="content">
                    <label> Work With Us</label>
                    <p>About Me</p>
                    <p>About Me</p>
                    <p>About Me</p>
                </div>
            </div>
            <div className="copyright">
                <p>&#169; 2022 Made with &hearts; in Bandung</p>
            </div>
        </div>
    )
}
