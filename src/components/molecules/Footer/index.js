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
    const props_theme = useContext(ThemeContext)
    const { t } = useTranslation();
    
    return (
        <div className='footer'>
            <div className="container-content">
                <div className="content">
                    <label> Language</label>
                    <select name="" id="" onChange={props_language.changeLang}>
                        <option value="id" selected={props_language.lang =='id'? true:false}>Indonesia</option>
                        <option value="en" selected={props_language.lang =='en'? true:false}>English(United States)</option>
                    </select>
                    <label> Theme</label>
                    <select name="" id="" onChange={props_theme.changeTheme}>
                        <option value="light" selected={props_theme.theme =='light'? true:false}>Light</option>
                        <option value="dark" selected={props_theme.theme =='dark'? true:false}>Dark</option>
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
                <p>&#169; 2023 Made with &hearts; in Bandung</p>
            </div>
        </div>
    )
}
