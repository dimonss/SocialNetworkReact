import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi! How are you?', amountLikes: 12},
                {id: 2, message: 'Dimoooon!', amountLikes: 10},
                {id: 3, message: 'It`s my first post!', amountLikes: 20},
                {id: 4, message: 'yo!', amountLikes: 30},
                {id: 5, message: 'Hello!!', amountLikes: 40}
            ],
            newPostText: ""

        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Dimon'},
                {id: 2, name: 'Gena'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Rus'},
                {id: 5, name: 'Slava'},
                {id: 6, name: 'Lera'},
                {id: 7, name: 'Vera'},
                {id: 8, name: 'Jenya'}
            ],
            messageData: [
                {id: 1, message: 'hi!!!'},
                {id: 2, message: 'Yo'},
                {id: 3, message: 'How are you?'},
                {id: 4, message: 'what`s going on'},
                {id: 5, message: 'Hello!'},
                {id: 6, message: 'hi!'}
            ],
            newMessageText: ""
        },
        sidebarPage: {}
    },
    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log("state changed")
    },

    subscribe(observer){
        this._callSubscriber = observer
    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)

        this._callSubscriber(this._state)
    }
}


window.store = store

export default store