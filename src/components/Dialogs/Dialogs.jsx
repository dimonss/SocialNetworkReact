import React from "react"
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem"
import Message from "./Message/Message"
import {sentMessageActionCreator, updateNewMessaageBodyActionCreator} from "../../redux/dialogsReducer"


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogsDataElement = state.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageDataElement = state.messageData.map(m => <Message key={m.id} message={m.message}/>)
    let newMessageText = state.newMessageText

    let onSendMessageClick = () => {
        props.store.dispatch(sentMessageActionCreator())
    }
    let onNewMessageChange = (event) => {
        let body = event.target.value
        props.store.dispatch(updateNewMessaageBodyActionCreator(body))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsDataElement}
            </div>
            <div className={s.messages}>
                <div>{messageDataElement}</div>
                <div>
                    <div>
                        <textarea
                        value={newMessageText}
                        placeholder='Enter your message'
                        onChange={onNewMessageChange}
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs