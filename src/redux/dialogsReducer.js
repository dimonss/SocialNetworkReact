

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newSymbol
            return state

        case SEND_MESSAGE:
            let valueId=state.messageData.length + 1
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