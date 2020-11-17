import React from "react"
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom"


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div>
            <NavLink to={path} className={s.navLink} activeClassName = {s.active}>{props.name}</NavLink>
            <br/>
            <br/>
        </div>
    )
}

export default DialogItem