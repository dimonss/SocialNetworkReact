import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    )
}


const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dimon'},
        {id: 2, name: 'Gena'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Rus'},
        {id: 5, name: 'Slava'},
        {id: 6, name: 'Jenya'},
    ]

    let messageData = [
        {id: 1, message: 'hi!!!'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'what`s going on'},
        {id: 5, message: 'Hello!'},
        {id: 6, message: 'hi!'},
    ]

    let dialogsDataElement = dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let messageDataElement = messageData.map(m => <Message key={m.id} message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsDataElement }
            </div>
            <div className={s.messages}>
                { messageDataElement }
            </div>
        </div>
    )
}

export default Dialogs;