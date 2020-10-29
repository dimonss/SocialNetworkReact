import React from "react";
import s from './NavBar.module.css'


const NavBar = () =>{
    return <nav className={s.nav}>
        <div className={s.item}>
            <a href='http://www.dich.ga'>Masseges</a>
        </div>
        <div className={s.item}>
            <a href='http://www.dich.ga'>News</a>
        </div>
        <div className={s.item}>
            <a href='http://www.dich.ga'>Music</a>
        </div>
        <div className={s.item}>
            <br/>
            <a href='http://www.dich.ga'>Settings</a>
        </div>
    </nav>
}


export default NavBar;