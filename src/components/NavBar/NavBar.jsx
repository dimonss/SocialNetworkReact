import React from "react";
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return <nav className={s.nav}>
        <div>
            <NavLink className={s.item} to='/profile' activeClassName = {s.active}>Profile</NavLink>
        </div>
        <br/>
        <br/>
        <div>
            <NavLink className={s.item} to='/dialogs' activeClassName = {s.active}>Dialogs</NavLink>
        </div>
        <br/>
        <br/>
        <div>
            <NavLink className={s.item} to='http://www.dich.ga' activeClassName = {s.active}>Music</NavLink>
        </div>
        <br/>
        <br/>
        <div>
            <br/>
            <NavLink className={s.item} to='http://www.dich.ga' activeClassName = {s.active}>Settings</NavLink>
        </div>
        <br/>
        <br/>
    </nav>
}


export default NavBar;