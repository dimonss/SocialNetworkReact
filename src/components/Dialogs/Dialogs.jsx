import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";





const Dialogs = (props) => {

    let dialogsDataElement = props.state.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let messageDataElement = props.state.messageData.map(m => <Message key={m.id} message={m.message}/>)
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