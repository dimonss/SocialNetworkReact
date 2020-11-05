import React from "react";
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return <nav className={s.nav}>
        <div>
            <NavLink className={s.item} to='/profile'>Profile</NavLink>
        </div>
        <div>
            <NavLink className={s.item} to='/dialogs'>Dialogs</NavLink>
        </div>
        <div>
            <a className={s.item} href='http://www.dich.ga'>Music</a>
        </div>
        <div>
            <br/>
            <a className={s.item} href='http://www.dich.ga'>Settings</a>
        </div>
    </nav>
}


export default NavBar;