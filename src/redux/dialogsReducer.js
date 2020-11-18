const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newSymbol
            return state

        case SEND_MESSAGE:
            let valueId = state.messageData.length + 1
            let body = state.newMessageText
            state.messageData.push({id: valueId, message: body})
            state.newMessageText = ''
            return state

        default:
            return state
    }
}

export const sentMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessaageBodyActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_TEXT, newSymbol: body})

export default dialogReducer