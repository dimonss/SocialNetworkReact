import React from "react";
import s from './Header.module.css'
import logo from './logoBlack.png'


const Header = () => {
    return <header className={s.header}>
        <img src={logo} alt='Logo DiCH' />
    </header>

}

export default Header;