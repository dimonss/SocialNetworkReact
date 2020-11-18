import React from "react"
import {sentMessageActionCreator, updateNewMessaageBodyActionCreator} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().dialogsPage
                let onSendMessageClick = () => {
                    store.dispatch(sentMessageActionCreator())
                }
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessaageBodyActionCreator(body))
                }
                return <Dialogs updateNewMessaageBody={onNewMessageChange}
                                sendMessage={onSendMessageClick}
                                dialogsPage={state}/>
            }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer